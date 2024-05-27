Rails.application.routes.draw do
  namespace :api do
    get 'home', to: 'home#index'
    get 'qna', to: 'qna#index'
    get 'freeboard', to: 'board#index'
  end

  post 'freeboard', to: 'board#create'
  get 'freeboard/new', to: 'board#new'
  get 'freeboard/:id', to: 'board#show'
  delete 'freeboard/:id', to: 'board#destroy'
end
