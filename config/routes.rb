Rails.application.routes.draw do
  namespace :api do
    get 'home', to: 'home#index'
    get 'qna', to: 'qna#index'
    resources :board, only: [:index, :new, :create, :show, :update, :destroy]
  end
end
