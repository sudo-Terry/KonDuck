Rails.application.routes.draw do
  namespace :api do
    get 'home', to: 'home#index'
    resources :qna, only: [:index, :show, :create, :update, :destroy] do
      resources :qna_answers, only: [:index, :show, :create, :update, :destroy] do
        member do
          post 'like'
          post 'dislike'
          post 'select_answer'
        end
      end
    end
    resources :board, only: [:index, :new, :create, :show, :update, :destroy] do
      resources :post_comments, only: [:index, :new, :create, :show, :update, :destroy] do
        member do
          post 'like'
          post 'dislike'
        end
      end
    end
  end
end
