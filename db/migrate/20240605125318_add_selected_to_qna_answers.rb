class AddSelectedToQnaAnswers < ActiveRecord::Migration[6.1]
  def change
    add_column :qna_answers, :selected, :boolean, default:false
  end
end
