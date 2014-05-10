class CreateStatusUpdates < ActiveRecord::Migration
  def change
    create_table :status_updates do |t|
      t.string :user
      t.string :action
      t.string :glue
      t.text :status

      t.timestamps
    end
  end
end
