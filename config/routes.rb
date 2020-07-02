Rails.application.routes.draw do
  root to: 'pages#home'
  get '/impressie', to: 'pages#impressie'
  get '/inloop', to: 'pages#inloop'
  get '/t72', to: 'pages#t72'
  get '/t48', to: 'pages#t48'
  get '/t24', to: 'pages#t24'
  get '/doorbraak', to: 'pages#doorbraak'
  get '/info', to: 'pages#info'
  get '/system', to: 'pages#system'
  get '/videoS1', to: 'pages#videoS1'
  get '/videoS2', to: 'pages#videoS2'
  get '/journaalT72', to: 'pages#journaalT72'
  get '/journaalT48', to: 'pages#journaalT48'
  get '/journaalT0', to: 'pages#journaalT0'
  get '/krant', to: 'pages#krant'
  # get '/info', to: 'pages#info'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
