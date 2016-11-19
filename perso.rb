require 'sinatra'

require 'sinatra/base'
require 'slim'

class Perso < Sinatra::Base

  get '/' do
      slim :home

      end
end
