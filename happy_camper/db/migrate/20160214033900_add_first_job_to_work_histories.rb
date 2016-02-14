class AddFirstJobToWorkHistories < ActiveRecord::Migration
  def change
    add_column :work_histories, :first_job, :boolean
  end
end
