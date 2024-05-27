require 'selenium-webdriver'
require 'open-uri'
require 'nokogiri'

class Company < ApplicationRecord
  self.primary_key = 'id'

  has_many :articles

  BLOG_SOURCES = {
    kakao_blog: 'https://tech.kakao.com/blog/',
    netflix_blog: 'https://netflixtechblog.com/',
    googleAI_blog: 'https://developers.googleblog.com/ko/search/?technology_categories=AI&page=1',
    googleMobile_blog: 'https://developers.googleblog.com/ko/search/?technology_categories=Mobile&page=1',
    nvidiaCV_blog: 'https://developer.nvidia.com/blog/category/computer-vision/',
    nvidiaCloud_blog: 'https://developer.nvidia.com/blog/category/data-center-cloud/',
    naver_blog: 'https://d2.naver.com/helloworld?page=0'
  }

  def self.fetch_and_save_articles(blog_key)
    company_name = blog_key.to_s.split('_').first
    company = find_or_create_by(name: company_name)

    url = BLOG_SOURCES[blog_key]

    options = Selenium::WebDriver::Chrome::Options.new
    options.add_argument('--headless')
    options.add_argument('--disable-gpu')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')

    driver_path = '/usr/local/bin/chromedriver'
    service = Selenium::WebDriver::Service.chrome(path: driver_path)
    driver = Selenium::WebDriver.for :chrome, options: options, service: service

    begin
      puts "Fetching URL: #{url}"
      driver.navigate.to url
      sleep 2

      stop_crawling = false

      loop do
        html = driver.page_source
        doc = Nokogiri::HTML(html)

        articles = parse_articles(doc, blog_key)
        puts "Found #{articles.size} articles"

        articles.each do |article|
          existing_article = Article.find_by(url: article[:url])

          if existing_article
            puts "Skipping duplicate article: #{article[:url]}"
            stop_crawling = true
            break
          end

          company.articles.create(article)
        end

        break if stop_crawling

        next_button = find_next_button(driver, blog_key)
        if next_button.nil?
          puts "No more pages to load."
          break
        else
          next_button.click
          sleep 2
        end
      end

    rescue Nokogiri::SyntaxError => e
      puts "Error parsing HTML: #{e.message}"
    rescue StandardError => e
      puts "Error fetching and saving articles: #{e.message}"
    ensure
      driver.quit
    end
  end

  def self.parse_articles(doc, blog_key)
    case blog_key
    when :kakao_blog
      doc.css('ul.list_post > li').map do |article_node|
        {
          title: article_node.at_css('h3.tit_post')&.text&.strip,
          text: article_node.at_css('dl.dl_info > dd')&.text&.strip,
          url: "https://tech.kakao.com#{article_node.at_css('a.link_post')['href']}",
          thumbnail: article_node.at_css('div.box_thumb img')['src'],
          author: article_node.css('dl.dl_info dd').first.text.strip,
          date: article_node.css('dl.dl_info dd')[1].text.strip,
          blog_name: "KAKAO"
        }
      end
    when :netflix_blog
      doc.css('.col.u-xs-marginBottom10').map do |article_node|
        thumbnail_node = article_node.previous_element.at_css('a.u-block.u-xs-height170, a.u-height350')
        next if thumbnail_node.nil? # Skip article if there is no thumbnail node
        style_attribute = thumbnail_node&.[]('style')
        match_data = style_attribute&.match(/url\((.*?)\)/)
        thumbnail_url = match_data ? match_data[1].gsub(/['"]/, '') : nil
        next if thumbnail_url.nil? # Skip article if there is no thumbnail URL
    
        {
          title: article_node.css('.u-contentSansBold').text.strip,
          text: article_node.css('.u-contentSansThin').text.strip,
          url: article_node.css('a').first['href'],
          thumbnail: thumbnail_url,
          author: "Netflix TechBlog Team",
          date: article_node.css('time').attr('datetime').value,
          blog_name: "NETFLIX"
        }
      end
    when :googleAI_blog, :googleMobile_blog
      doc.css('.search-result').map do |article_node|
        {
          title: article_node.css('.search-result__title a').text.strip,
          text: article_node.css('.search-result__summary').text.strip,
          url: "https://developers.googleblog.com#{article_node.css('.search-result__title a').first['href']}"
        }
      end
    when :nvidiaCV_blog, :nvidiaCloud_blog
      doc.css('.carousel-row-slide__inner').map do |article_node|
        {
          title: article_node.css('.carousel-row-slide__title h3').text.strip,
          text: article_node.css('.carousel-row-slide__excerpt .content-m').text.strip,
          url: article_node.css('a.carousel-row-slide__link').first['href']
        }
      end
    when :naver_blog
      doc.css('.post_article .cont_post').map do |article_node|
        {
          title: article_node.at_css('h2 a').text.strip,
          text: article_node.at_css('.post_txt_wrap .post_txt').text.strip,
          url: "https://d2.naver.com#{article_node.at_css('h2 a')['href']}"
        }
      end
    else
      []
    end
  end

  def self.find_next_button(driver, blog_key)
    case blog_key
    when :kakao_blog
      driver.find_elements(css: 'button.btn_pagenation').first
    when :netflix_blog
      nil
    when :googleAI_blog, :googleMobile_blog
      driver.find_elements(css: 'a.glue-button--icon[aria-label="다음"]').first
    when :nvidiaCV_blog, :nvidiaCloud_blog
      driver.find_elements(css: 'button.load-more-button__button').first
    when :naver_blog
      driver.find_elements(css: '.paginate a.btn_next').first
    else
      nil
    end
  end
end
