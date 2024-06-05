class AddLikesAndDislikesToQnaAnswers < ActiveRecord::Migration[6.1]
  def change
    add_column :qna_answers, :likes, :integer , default:0
    add_column :qna_answers, :dislikes, :integer , default:0
  end
end
