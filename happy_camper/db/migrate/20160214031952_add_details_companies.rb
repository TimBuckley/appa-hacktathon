class AddDetailsCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :website, :string
    add_column :companies, :logo, :string
  end
end
