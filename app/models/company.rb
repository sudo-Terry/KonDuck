# app/models/company.rb
require 'selenium-webdriver'
require 'open-uri'
require 'nokogiri'

class Company < ApplicationRecord
  self.primary_key = 'id'

  has_many :articles

  def self.fetch_and_save_articles_from_kakao_blog

    company = Company.find_or_create_by(name: "kakao")

    base_url = "https://tech.kakao.com"
    url = "#{base_url}/blog/"

    options = Selenium::WebDriver::Chrome::Options.new
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')

    # Specify the path to the ChromeDriver executable
    driver_path = '/usr/local/bin/chromedriver'

    service = Selenium::WebDriver::Service.chrome(path: driver_path)

    driver = Selenium::WebDriver.for :chrome, options: options, service: service

    begin
      puts "Fetching URL: #{url}"
      driver.navigate.to url
      sleep 2

      loop do
        html = driver.page_source
        doc = Nokogiri::HTML(html)

        articles = doc.css('ul.list_post > li')
        puts "Found #{articles.size} articles"

        articles.each do |article_node|
          title = article_node.at_css('h3.tit_post')&.text&.strip
          text = article_node.at_css('dl.dl_info > dd')&.text&.strip
          article_relative_url = article_node.at_css('a.link_post')['href']
          article_url = "#{base_url}#{article_relative_url}"

          puts "Title: #{title}"
          puts "URL: #{article_url}"
          puts "Text: #{text}"

          existing_article = Article.find_by(url: article_url)

          if existing_article
            puts "Skipping duplicate article: #{article_url}"
            next
          end

          company.articles.create(title: title, url: article_url, text: text)
        end

        next_button = driver.find_elements(css: 'button.btn_pagenation')
        puts "Next button found: #{!next_button.empty?}"

        if next_button.empty?
          break
        else
          next_button.first.click
          sleep 2 # Wait for the next page to load
        end
      end

    rescue Nokogiri::HTML::ScanError => e
      puts "Error parsing HTML: #{e.message}"
    rescue StandardError => e
      puts "Error fetching and saving articles: #{e.message}"
    ensure
      driver.quit
    end
  end
  
end
