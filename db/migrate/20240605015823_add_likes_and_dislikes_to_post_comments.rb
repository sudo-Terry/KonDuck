class AddLikesAndDislikesToPostComments < ActiveRecord::Migration[6.1]
  def change
    add_column :post_comments, :likes, :integer ,default: 0
    add_column :post_comments, :dislikes, :integer , default: 0
  end
end
