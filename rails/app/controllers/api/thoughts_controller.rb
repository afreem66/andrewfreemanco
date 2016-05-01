class Api::ThoughtsController < ApplicationController
  def index
    render json: Thought.all
  end

  def show
    render json: Thought.find(params[:id])
  end

  def create
    @thought = Thought.new(params[:thought])
    if @thought.save
      render json: @thought
    end
  end
end
