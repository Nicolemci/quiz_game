class QuizzesController < ApplicationController
  def index
    @category = Category.find(params[:category_id])
    @quizzes = @category.quizzes
  end

  def show
    @quiz = Quiz.find(params[:id])
  end
end
