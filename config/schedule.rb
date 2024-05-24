every 1.day, at: '12:00 am' do
  rake "crawl:kakao_blog"
end

every 1.day, at: '12:30 am' do
  rake "crawl:netflix_blog"
end

every 1.day, at: '1:00 am' do
  rake "crawl:googleAI_blog"
end

every 1.day, at: '1:30 am' do
  rake "crawl:googleMobile_blog"
end

every 1.day, at: '2:00 am' do
  rake "crawl:nvidiaCV_blog"
end

every 1.day, at: '2:30 am' do
  rake "crawl:nvidiaCloud_blog"
end

every 1.day, at: '3:00 am' do
  rake "crawl:naver_blog"
end
