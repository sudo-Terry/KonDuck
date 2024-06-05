class Qna < ApplicationRecord
    has_many :qna_answers, dependent: :destroy

    validates :title, :content, :user_name, :user_password , presence: true
end
