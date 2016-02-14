class AddVisibleFlagToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :visible, :boolean, default: false
  end
end
