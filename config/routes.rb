Rails.application.routes.draw do
  root 'categories#index'

  resources :categories, only: [:index, :show] do
    resources :quizzes, only: [:index, :show, :new, :create]
  end

  resources :countries, only: [:index]
end
