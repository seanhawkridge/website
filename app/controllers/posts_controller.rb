class PostsController < ApplicationController
  include Pagination

  helper_method :next_page, :previous_page

  def index
    @posts = Post.all.order(created_at: :desc).then(&paginate)
    @next_page = page_no + 1
    @previous_page = page_no - 1
  end

  def show
    @post = Post.find(params[:id])
  end
end
