class ChangeGraduateMonthAndYearToDate < ActiveRecord::Migration
  def change
    remove_column :graduates, :year_attended
    remove_column :graduates, :month_attended
    add_column :graduates, :cohort_date, :date
  end
end
