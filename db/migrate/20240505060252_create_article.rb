class CreateArticle < ActiveRecord::Migration[6.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.string :text

      t.timestamps
    end

    add_reference :articles, :company, foreign_key: true
  end
end
