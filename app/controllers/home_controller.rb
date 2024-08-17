class HomeController < ApplicationController
    include Pagination

    helper_method :next_page, :previous_page


  def index
    @posts = Post.all.then(&paginate)
    @next_page = page_no + 1
    @previous_page = page_no - 1
  end
end
