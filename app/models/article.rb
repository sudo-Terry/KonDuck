# app/models/article.rb
# require 'open-uri'
# require 'nokogiri'

class Article < ApplicationRecord
  belongs_to :company
end

# def self.fetch_and_save_articles_from_kakao_blog
  #   url = "https://tech.kakao.com/blog/"
  #   html = URI.open(url)
  #   doc = Nokogiri::HTML(html)

  #   # Find or create the company with the name "kakao"
  #   company = Company.find_or_create_by(name: 'kakao')

  #   doc.css('.elementor-post').each do |article_node|
  #     title = article_node.css('.elementor-post__title a').text.strip
  #     text = article_node.css('.elementor-post__excerpt p').text.strip
  #     article_url = article_node.css('.elementor-post__title a').first['href']

  #     # Save the article with the associated company
  #     company.articles.create(title: title, url: article_url, text: text)
  #   end
  # end



# def self.crawl_and_save_articles(url)
#   html = URI.open(url)
#   doc = Nokogiri::HTML(html)

#   doc.css('.article').each do |article_node|
#     title = article_node.css('h2').text.strip
#     text = article_node.css('.content').text.strip

#     # Find or initialize the company based on the host of the URL
#     company = Company.find_or_initialize_by(host: URI.parse(url).host)

#     # Create the article associated with the company
#     company.articles.create(title: title, text: text)
#   end
# end