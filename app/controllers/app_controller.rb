class AppController < ApplicationController
  def index
  end

  def admin
    @users = User.all
  end

  def counter
  end
end
