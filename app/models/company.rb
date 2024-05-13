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
  
        # Save the article with the associated company
        company.articles.create(title: title, url: article_url, text: text)
      end
    rescue StandardError => e
      puts "Error fetching and saving articles: #{e.message}"
    end
  end

  has_many :articles
end

