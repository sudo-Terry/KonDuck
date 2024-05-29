class Post < ApplicationRecord
  validates :title, :content, :user_name, :user_password, presence: true
end
