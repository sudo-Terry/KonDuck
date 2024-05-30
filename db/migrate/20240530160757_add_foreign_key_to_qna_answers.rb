class AddForeignKeyToQnaAnswers < ActiveRecord::Migration[6.1]
  def change
    add_foreign_key :qna_answers, :qnas, column: :qna_id
  end
end
