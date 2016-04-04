class Article < ActiveRecord::Base
  include Picturable
  has_and_belongs_to_many :categories
  mount_uploader :main_picture, PictureUploader
  accepts_nested_attributes_for :categories

  scope :recent, ->(){order(:created_at)}
end
