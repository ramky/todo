class TasksController < ApplicationController
  respond_to :html, :json

  def index
    respond_with(@tasks = Task.all)
  end

  def create
    @task = Task.new(tasks_params)
    @task.save
    # Default Rails responders repond with an unprocessable entity (422) status code when there are validation errors
    respond_with(@task)
  end

private
  def tasks_params
    params.require(:task).permit(:title, :complete)
  end
end
