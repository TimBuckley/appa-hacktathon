class CreateCapstones < ActiveRecord::Migration
  def change
    create_table :capstones do |a|
      t.integer :graduate_id, null: false, index: true
      t.string :name, null: false
      t.string :website_url
      t.string :github_url

      t.timestamps null: false
    end
  end
end
