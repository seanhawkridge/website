class PagesController < ApplicationController
    def about
    end

    def home
        @posts = Post.image.last(2)
    end
end
