class CreatePostComments < ActiveRecord::Migration[6.1]
  def change
    create_table :post_comments do |t|
      t.references :post, null: false, foreign_key: true
      t.text :content
      t.string :user_name
      t.string :user_password

      t.timestamps
    end
  end
end
