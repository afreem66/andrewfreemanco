class CreateThoughts < ActiveRecord::Migration[5.0]
  def change
    create_table :thoughts do |t|
      t.string :title
      t.text :body
      t.string :author
      t.date :date

      t.timestamps
    end
  end
end
