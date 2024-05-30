class CreateQnaAnswers < ActiveRecord::Migration[6.1]
  def change
    create_table :qna_answers do |t|
      t.integer :qna_id
      t.text :answer
      t.string :user_name
      t.string :user_password

      t.timestamps
    end
  end
end
