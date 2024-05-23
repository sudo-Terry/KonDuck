namespace :crawl do
  desc 'Crawl articles from Kakao blog'
  task kakao_blog: :environment do
    Company.fetch_and_save_articles(:kakao_blog)
    puts 'Articles from Kakao blog crawled and saved successfully!'
  end

  desc 'Crawl articles from Netflix blog'
  task netflix_blog: :environment do
    Company.fetch_and_save_articles(:netflix_blog)
    puts 'Articles from Netflix blog crawled and saved successfully!'
  end

  desc 'Crawl articles from Google AI blog'
  task googleAI_blog: :environment do
    Company.fetch_and_save_articles(:googleAI_blog)
    puts 'Articles from Google AI blog crawled and saved successfully!'
  end

  desc 'Crawl articles from Google Mobile blog'
  task googleMobile_blog: :environment do
    Company.fetch_and_save_articles(:googleMobile_blog)
    puts 'Articles from Google Mobile blog crawled and saved successfully!'
  end

  desc 'Crawl articles from Nvidia Computer Vision blog'
  task nvidiaCV_blog: :environment do
    Company.fetch_and_save_articles(:nvidiaCV_blog)
    puts 'Articles from Nvidia Computer Vision blog crawled and saved successfully!'
  end

  desc 'Crawl articles from Nvidia Cloud blog'
  task nvidiaCloud_blog: :environment do
    Company.fetch_and_save_articles(:nvidiaCloud_blog)
    puts 'Articles from Nvidia Cloud blog crawled and saved successfully!'
  end

  desc 'Crawl articles from Naver blog'
  task naver_blog: :environment do
    Company.fetch_and_save_articles(:naver_blog)
    puts 'Articles from Naver blog crawled and saved successfully!'
  end
end
