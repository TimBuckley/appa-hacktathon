class ChangeIntsToString < ActiveRecord::Migration
  def change
    change_column :github_data, :number_of_repos, :string
    change_column :graduates, :year_attended, :string
    change_column :work_histories, :year_hired, :string
  end
end
