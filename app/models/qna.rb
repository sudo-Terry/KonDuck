class Qna < ApplicationRecord
    has_many :qna_answer, dependent: :destroy

    validates :title, :content, :user_name, :user_password , presence: true
end
