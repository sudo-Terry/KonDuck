class AddColumnsToArticles < ActiveRecord::Migration[6.1]
  def change
    add_column :articles, :thumbnail, :string
    add_column :articles, :author, :string
    add_column :articles, :date, :string
  end
end
