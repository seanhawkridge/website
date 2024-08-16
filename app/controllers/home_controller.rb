class HomeController < ApplicationController
    skip_before_action :authenticate
  def index
    @posts = Post.all
  end
end
