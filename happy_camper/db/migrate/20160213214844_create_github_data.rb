class CreateGithubData < ActiveRecord::Migration
  def change
    create_table :github_data do |t|
      t.integer :graduate_id, null: false, index: true
      t.string :url
      t.string :username
      t.integer :number_of_repos
      t.string :personal_website_url

      t.timestamps null: false
    end

    remove_column :graduates, :last_name
    rename_column :graduates, :first_name, :full_name
  end
end
