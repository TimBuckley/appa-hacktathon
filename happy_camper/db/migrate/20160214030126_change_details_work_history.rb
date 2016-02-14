class ChangeDetailsWorkHistory < ActiveRecord::Migration
  def change
    remove_column :work_histories, :month_hired
    remove_column :work_histories, :year_hired
    add_column :work_histories, :date_hired, :datetime
  end
end
