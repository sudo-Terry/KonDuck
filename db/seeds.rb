# require 'faker'

# # Create 15 posts
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

# # Create 50 post comments
# 50.times do
#   PostComment.create(
#     post_id: Post.pluck(:id).sample,
#     content: Faker::Lorem.paragraphs(number: 1).join("\n"),
#     user_name: Faker::Internet.username,
#     user_password: Faker::Internet.password,
#     created_at: Faker::Time.between(from: 1.year.ago, to: Time.now),
#     updated_at: Faker::Time.between(from: 1.year.ago, to: Time.now),
#     likes: Faker::Number.between(from: 0, to: 100),
#     dislikes: Faker::Number.between(from: 0, to: 100)
#   )
# end

# # Create 8 QnAs
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

# # Create 20 QnaAnswers
# 20.times do
#   QnaAnswer.create(
#     qna_id: Qna.pluck(:id).sample,
#     answer: Faker::Lorem.paragraphs(number: 2).join("\n"),
#     user_name: Faker::Internet.username,
#     user_password: Faker::Internet.password,
#     created_at: Faker::Time.between(from: 1.year.ago, to: Time.now),
#     updated_at: Faker::Time.between(from: 1.year.ago, to: Time.now),
#     likes: Faker::Number.between(from: 0, to: 100),
#     dislikes: Faker::Number.between(from: 0, to: 100),
#     selected: Faker::Boolean.boolean
#   )
# end

# # Ensure there are posts to comment on
# post_ids = Post.pluck(:id)
# if post_ids.empty?
#   raise "No posts found. Please create posts before running this script."
# end

# # Create 50 post comments
# 50.times do
#   PostComment.create!(
#     post_id: post_ids.sample,
#     content: Faker::Lorem.paragraphs(number: 1).join("\n"),
#     user_name: Faker::Internet.username,
#     user_password: Faker::Internet.password,
#     created_at: Faker::Time.between(from: 1.year.ago, to: Time.now),
#     updated_at: Faker::Time.between(from: 1.year.ago, to: Time.now),
#     likes: Faker::Number.between(from: 0, to: 100),
#     dislikes: Faker::Number.between(from: 0, to: 100)
#   )
# end

# # Create 50 user votes for qna answers
# 50.times do
#   UserVote.create(
#     qna_answer_id: QnaAnswer.pluck(:id).sample,
#     user_name: Faker::Internet.username,
#     vote_type: ['up', 'down'].sample,
#     created_at: Faker::Time.between(from: 1.year.ago, to: Time.now),
#     updated_at: Faker::Time.between(from: 1.year.ago, to: Time.now)
#   )
# end
