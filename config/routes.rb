Rails.application.routes.draw do
  devise_for :users
  mount API::V1::Users => '/api'
  mount API::V1::Posts => '/api'

  get '/' => 'app#index'
  get '/admin' => 'app#admin'
  get '/counter' => 'app#counter'

  resources :posts
end
