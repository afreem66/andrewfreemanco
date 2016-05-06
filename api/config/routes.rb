Rails.application.routes.draw do
  # namespace :api do
    resources :tags, :path  => '/tags'
    resources :projects, :path  => '/projects'
    resources :thoughts, :path  => '/thoughts'
  # end
end
