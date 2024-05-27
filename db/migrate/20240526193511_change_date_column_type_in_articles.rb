class ChangeDateColumnTypeInArticles < ActiveRecord::Migration[6.1]
  def up
    change_column :articles, :date, :datetime, using: 'date::timestamp'
  end

  def down
    change_column :articles, :date, :string
  end
end

