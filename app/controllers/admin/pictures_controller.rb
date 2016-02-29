class Admin::PicturesController < Admin::ApplicationController
  
  def index
  end

  def create
    picture = Picture.create({file: params['file']})
    if picture
      render json: picture, status: :ok, location: picture.file.url
    else
      render json: picture.errors, status: :unprocessable_entity 
    end 
  end

  def destory
  end

  private
  # Never trust parameters from the scary internet, only allow the white list through.
  def category_params
    params.require(:category).permit(:file)
  end

end