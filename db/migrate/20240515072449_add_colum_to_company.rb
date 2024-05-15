class AddColumToCompany < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :name, :string
  end
end
