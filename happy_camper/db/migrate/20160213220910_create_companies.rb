class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :uuid, null: false, index: true
      t.string :name
      t.string :linkedin_url
      t.string :crunchbase_url
      
      t.timestamps null: false
    end
  end
end
