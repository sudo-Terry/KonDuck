class CreateQnas < ActiveRecord::Migration[6.1]
  def change
    create_table :qnas do |t|
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
