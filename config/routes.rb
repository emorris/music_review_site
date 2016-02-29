Rails.application.routes.draw do
  devise_for :users
  namespace :admin do 
    root 'application#index'
    resources :categories
    resources :articles
    resources :pictures, only:[:index, :create, :destory]
  end
  get '/index' => 'main#index'
  root 'main#index'
end
