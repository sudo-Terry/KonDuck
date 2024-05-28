Rails.application.routes.draw do
  namespace :api do
    get 'home', to: 'home#index'
    get 'qna', to: 'qna#index'
    get 'freeBoard', to: 'board#index'
    post 'freeBoard', to: 'board#create'
    get 'freeBoard/new', to: 'board#new'
    get 'freeBoard/:id', to: 'board#show'
    delete 'freeBoard/:id', to: 'board#destroy'
  end

end
