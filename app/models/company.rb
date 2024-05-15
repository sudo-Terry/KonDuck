class Company < ApplicationRecord
  primary key = 'id'

# app/models/company.rb

require 'open-uri'
require 'nokogiri'

class Company < ApplicationRecord
  def self.fetch_and_save_articles_from_kakao_blog
    url = "https://tech.kakao.com/blog/"
    
    begin
      html = URI.open(url)
      doc = Nokogiri::HTML(html)
  
      # Find or create the company with the name "kakao"
      company = Company.find_or_create_by(name: "kakao")
  
      doc.css('.elementor-post').each do |article_node|
        title = article_node.css('.elementor-post__title a').text.strip
        text = article_node.css('.elementor-post__excerpt p').text.strip
        article_url = article_node.css('.elementor-post__title a').first['href']

        # checking same article by url
        existing_article = Article.find_by(url: article_url)

        if existing_article
          puts "Skipping duplicate article: #{article_url}"
          next
        end
  
        # Save the article with the associated company
        company.articles.create(title: title, url: article_url, text: text)
      end
    rescue Nokogiri::ParseError => e
      puts "Error parsing HTML: #{e.message}"
    rescue StandardError => e
      puts "Error fetching and saving articles: #{e.message}"
    end
  end

  def self.fetch_and_save_articles_from_netflix_blog
    url = "https://netflixtechblog.com/"
    
    begin
      html = URI.open(url)
      doc = Nokogiri::HTML(html)
  
      # Find or create the company with the name "netflix"
      company = Company.find_or_create_by(name: "netflix")
      
  
      doc.css('.col.u-xs-marginBottom10').each do |article_node|
        title = article_node.css('.u-contentSansBold').text.strip
        text = article_node.css('.u-contentSansThin').text.strip
        article_url = article_node.css('a').first['href']

        # checking same article by url
        existing_article = Article.find_by(url: article_url)

        if existing_article
          puts "Skipping duplicate article: #{article_url}"
          next
        end
  
        # Save the article with the associated company
        company.articles.create(title: title, url: article_url, text: text)
      end

    rescue Nokogiri::ParseError => e
      puts "Error parsing HTML: #{e.message}"
    rescue StandardError => e
      puts "Error fetching and saving articles: #{e.message}"
    end

  end


  def self.fetch_and_save_articles_from_woowahan_blog
    url = "https://techblog.woowahan.com/"
    
    begin
      html = URI.open(url)
      doc = Nokogiri::HTML(html)
  
      # Find or create the company with the name "woowahan"
      company = Company.find_or_create_by(name: "woowahan")
  
      doc.css('.post-item').each do |article_node|
        title = article_node.css('h2.post-title').text.strip
        text = article_node.css('p.post-excerpt').text.strip
        article_url = article_node.css('h2.post-title a').first['href']
  
        # Check if an article with the same URL already exists
        existing_article = Article.find_by(url: article_url)
  
        if existing_article
          puts "Skipping duplicate article: #{article_url}"
          next
        end
  
        # Save the article with the associated company
        company.articles.create(title: title, url: article_url, text: text)
      end
  
    rescue Nokogiri::ParseError => e
      puts "Error parsing HTML: #{e.message}"
    rescue StandardError => e
      puts "Error fetching and saving articles: #{e.message}"
    end
  end
  



  has_many :articles
end

