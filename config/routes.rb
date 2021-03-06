Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show, :update, :edit]
    resources :payments, only: [:index, :create, :show]
    resources :requests
    resource :session, only: [:create, :destroy]
  end
end
