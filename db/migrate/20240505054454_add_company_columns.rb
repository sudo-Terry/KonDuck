class AddCompanyColumns < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :name, :string
    add_column :companies, :host, :string
  end
end
