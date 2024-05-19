namespace :crawl do
  desc 'Crawl articles from blogs'
  task crawl_and_save: :environment do
    Article.fetch_and_save_articles_from_kakao_blog
    puts 'Articles from blog crawled and saved successfully!'
  end
end