class RemoveLogoFromCompanies < ActiveRecord::Migration
  def change
    rename_column :companies, :logo, :domain
  end
end
