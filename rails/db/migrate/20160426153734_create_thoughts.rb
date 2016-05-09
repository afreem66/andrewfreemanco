class CreateThoughts < ActiveRecord::Migration
  def change
    create_table :thoughts do |t|
      t.string :title
      t.string :body
      t.string :author
      t.date :posted_date

      t.timestamps null: false
    end
  end
end
