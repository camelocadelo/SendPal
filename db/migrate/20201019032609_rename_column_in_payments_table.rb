class RenameColumnInPaymentsTable < ActiveRecord::Migration[5.2]
  def change
    rename_column :payments, :body, :note
  end
end
