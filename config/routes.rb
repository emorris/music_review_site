Rails.application.routes.draw do
  devise_for :users
  namespace :admin do 
    root 'application#index'
    resources :categories
    resources :articles
    patch 'articles/:id/add_picture' => 'articles#add_picture'
    resources :pictures, only:[:index, :create, :destroy]
  end
  get '/index' => 'main#index'
  root 'main#index'
end
