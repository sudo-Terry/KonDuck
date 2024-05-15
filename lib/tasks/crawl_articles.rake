# lib/tasks/crawl_articles.rake
namespace :crawl do
  desc 'Crawl articles from Kakao blog and save them'
  task kakao_blog_articles: :environment do
    Article.fetch_and_save_articles_from_kakao_blog
    puts 'Articles from Kakao blog crawled and saved successfully!'
  end
end

  