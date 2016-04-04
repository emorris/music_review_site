class Admin::ApplicationController < ApplicationController
  layout 'admin'
  before_action :authenticate_user!
  def index
    @articles = Article.all
    @categories = Category.all.includes(:articles)
  end
end
