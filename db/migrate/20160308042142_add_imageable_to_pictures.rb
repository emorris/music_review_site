class AddImageableToPictures < ActiveRecord::Migration
  def change
     change_table :pictures do |t|
      t.references :imageable, :polymorphic => true, index: true
    end
  end
end
