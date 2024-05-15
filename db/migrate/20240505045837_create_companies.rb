class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.timestamps
      t.string :name
      t.string :host
    end
  end
end

