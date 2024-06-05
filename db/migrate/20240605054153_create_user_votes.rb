class CreateUserVotes < ActiveRecord::Migration[6.1]
  def change
    create_table :user_votes do |t|
      t.references :post_comment, null: false, foreign_key: true
      t.string :user_name
      t.string :vote_type

      t.timestamps
    end
  end
end
