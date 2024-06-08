class UserVote < ApplicationRecord
  belongs_to :post_comment
  validates :user_name, presence: true
  validates :vote_type, presence: true, inclusion: { in: %w(like dislike) }
end
