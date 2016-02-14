class AddJobWorkHistories < ActiveRecord::Migration

  def change
    add_column :work_histories, :title, :string
  end
end
