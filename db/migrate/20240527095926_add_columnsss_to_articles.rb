class AddColumnsssToArticles < ActiveRecord::Migration[6.1]
  def change
    add_column :articles, :blog_name, :string
  end
end
