class MoveUrlToGraduates < ActiveRecord::Migration
  def change
    remove_column :github_data, :personal_website_url
    add_column :graduates, :website_url, :string
  end
end
