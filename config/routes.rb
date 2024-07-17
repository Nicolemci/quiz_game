Rails.application.routes.draw do
  get 'quizzes/index'
  get 'quizzes/show'
  root 'categories#index'
  resources :categories, only: [:index, :show] do
    resources :quizzes, only: [:index, :show]
  end
end
