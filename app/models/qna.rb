class Qna < ApplicationRecord
    validates :title, :content, presence: true
end
