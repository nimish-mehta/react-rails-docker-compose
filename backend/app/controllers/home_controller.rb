class HomeController < ApplicationController
  def index
    render json: { message: 'Working' }
  end
end
