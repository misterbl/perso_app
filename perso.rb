require 'sinatra'

require 'sinatra/base'

class Perso < Sinatra::Base  

  get '/' do
      'Hello World!'

      end
end
