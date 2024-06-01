class QnaAnswer < ApplicationRecord
    belongs_to :qna

    validates :answer, :user_name, :user_password, presence: true
end
