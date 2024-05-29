class AddUserNameAndUserPasswordToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :user_name, :string
    add_column :posts, :user_password, :string
  end
end
