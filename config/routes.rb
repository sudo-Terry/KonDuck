Rails.application.routes.draw do
  get 'comments/create'
  get 'home', to: 'home#index'
  get 'qna', to: 'qna#index'
  get 'board', to: 'board#index'

  resources :board, only: [:index, :create, :show, :new , :destroy]do
    resources :comments, only: :create
  end
end
