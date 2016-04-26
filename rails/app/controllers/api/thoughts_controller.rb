class Api::ThoughtsController < ApplicationController
  def index
    render json: Thought.all
  end

  def show
    render json: Thought.find(params[:id])
  end
end
