class AddMainPictureToArticles < ActiveRecord::Migration
  def change
    add_column :articles, :main_picture, :string
  end
end
