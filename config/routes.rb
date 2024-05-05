Rails.application.routes.draw do
  get 'home', to: 'home#index'
  get 'qna', to: 'qna#index'
  get 'board', to: 'board#index'
end
