Rails.application.routes.draw do
  root to: 'pages#home'
  get '/inloop', to: 'pages#inloop'
  get '/introductie', to: 'pages#introductie'
  get '/t72', to: 'pages#t72'
  get '/t48', to: 'pages#t48'
  get '/t24', to: 'pages#t24'
  get '/doorbraak', to: 'pages#doorbraak'
  get '/info', to: 'pages#info'
  # get '/info', to: 'pages#info'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
