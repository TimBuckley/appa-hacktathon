class CreateGraduates < ActiveRecord::Migration
  def change
    create_table :graduates do |t|
      t.string :graduate_uuid, null: false, index: true, unique: true
      t.string :first_name
      t.string :last_name
      t.string :picture_url
      t.string :month_attended
      t.integer :year_attended
      t.string :bootcamp_name, default: 'App Academy'
      t.string :bootcamp_location, default: 'San Francisco'

      t.timestamps null: false
    end
  end
end
