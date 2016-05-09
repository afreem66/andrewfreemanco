# This file is used by Rack-based servers to start the application.
use Rack::Cors do
  allow do
    origins '*'
    resource '/public/*', :headers => :any, :methods => :get
  end
end
require_relative 'config/environment'
run Rails.application
