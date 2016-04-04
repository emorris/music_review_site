class Category < ActiveRecord::Base
  include Picturable
  has_and_belongs_to_many :articles
end
