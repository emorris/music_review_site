Rails.application.routes.draw do
  get '/index' => 'main#index'
  root 'main#index'
end
