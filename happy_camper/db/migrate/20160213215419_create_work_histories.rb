class CreateWorkHistories < ActiveRecord::Migration
  def change
    create_table :work_histories do |t|
      t.integer :graduate_id, null: false, index: true
      t.integer :company_id, null: false, index: true
      t.boolean :current
      t.string :month_hired
      t.integer :year_hired
      t.string :location

      t.timestamps null: false
    end

    add_column :graduates, :string, :linkedin_url
  end
end
