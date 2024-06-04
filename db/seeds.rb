# require 'faker'

# 15.times do
#   Post.create(
#     title: Faker::Lorem.sentence,
#     content: Faker::Lorem.paragraphs(number: 5).join("\n"),
#     created_at: Faker::Time.between(from: 1.year.ago, to: Time.now),
#     updated_at: Faker::Time.between(from: 1.year.ago, to: Time.now),
#     user_name: Faker::Internet.username,
#     user_password: Faker::Internet.password
#   )
# end

# 50.times do
#   PostComment.create(
#     post_id: Post.pluck(:id).sample,
#     content: Faker::Lorem.paragraphs(number: 1).join("\n"),
#     user_name: Faker::Internet.username,
#     user_password: Faker::Internet.password,
#     created_at: Faker::Time.between(from: 1.year.ago, to: Time.now),
#     updated_at: Faker::Time.between(from: 1.year.ago, to: Time.now)
#   )
# end

# 8.times do
#   Qna.create(
#     title: Faker::Lorem.sentence,
#     content: Faker::Lorem.paragraphs(number: 3).join("\n"),
#     created_at: Faker::Time.between(from: 1.year.ago, to: Time.now),
#     updated_at: Faker::Time.between(from: 1.year.ago, to: Time.now),
#     user_name: Faker::Internet.username,
#     user_password: Faker::Internet.password
#   )
# end

# 20.times do
#   QnaAnswer.create(
#     qna_id: Qna.pluck(:id).sample,
#     answer: Faker::Lorem.paragraphs(number: 2).join("\n"),
#     user_name: Faker::Internet.username,
#     user_password: Faker::Internet.password,
#     created_at: Faker::Time.between(from: 1.year.ago, to: Time.now),
#     updated_at: Faker::Time.between(from: 1.year.ago, to: Time.now)
#   )
# end