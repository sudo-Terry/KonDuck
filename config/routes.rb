Rails.application.routes.draw do
  namespace :api do
    get 'home', to: 'home#index'
    resources :qna, only: [:index, :show, :create, :update, :destroy] do
      resources :qna_answers, only: [:index, :show, :create, :update, :destroy]
    end
    resources :board, only: [:index, :new, :create, :show, :update, :destroy] do
      resources :post_comments, only: [:index, :new, :create, :show, :update, :destroy]
    end
  end
end
