class AddUserDetailsToQnas < ActiveRecord::Migration[6.1]
  def change
    add_column :qnas, :user_name, :string
    add_column :qnas, :user_password, :string
  end
end
