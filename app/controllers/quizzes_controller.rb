class QuizzesController < ApplicationController
  def show
    @quiz = Quiz.find(params[:id])
    @countries = Country.order("RANDOM()").limit(10)
  end
end
