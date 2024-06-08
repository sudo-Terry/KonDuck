class AddQnaAnswerIdToUserVotes < ActiveRecord::Migration[6.1]
  def change
    add_reference :user_votes, :qna_answer, foreign_key: true
  end
end
