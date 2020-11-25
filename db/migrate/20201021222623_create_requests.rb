class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.integer "requestor_id", null: false
      t.integer "requestee_id", null: false
      t.float "amount", null: false
      t.string "note", null: false
      
      t.timestamps
    end
      add_index :requests, :requestor_id
      add_index :requests, :requestee_id
  end
end
