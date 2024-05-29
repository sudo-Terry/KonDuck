class Post < ApplicationRecord
    has_many :post_comments, dependent: :destroy

    validates :title, :content, :user_name, :user_password, presence: true
end
