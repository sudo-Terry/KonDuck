Rails.application.routes.draw do
  namespace :api do
    get 'home', to: 'home#index'
    resources :qna, only: [:index, :new, :create, :show, :update, :destroy] 
    resources :board, only: [:index, :new, :create, :show, :update, :destroy] do
      resources :post_comments, only: [:index, :new, :create, :show, :update, :destroy]
    end
  end
end
