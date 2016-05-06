class CreateTags < ActiveRecord::Migration[5.0]
  def change
    create_table :tags do |t|
      t.references :project, foreign_key: true
      t.references :thought, foreign_key: true

      t.timestamps
    end
  end
end
