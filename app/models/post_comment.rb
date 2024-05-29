class PostComment < ApplicationRecord
  belongs_to :post

  validates :content, :user_name, :user_password, presence: true
end
