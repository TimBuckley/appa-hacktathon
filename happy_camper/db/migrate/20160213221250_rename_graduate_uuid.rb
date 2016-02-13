class RenameGraduateUuid < ActiveRecord::Migration
  def change
    rename_column :graduates, :graduate_uuid, :uuid
  end
end
