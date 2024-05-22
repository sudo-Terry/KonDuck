Rails.application.routes.draw do
  namespace :api do
    get 'home', to: 'home#index'
    get 'qna', to: 'qna#index'
    get 'board', to: 'board#index'
  end

  resources :board, only: [:index, :create, :show, :new]
end
