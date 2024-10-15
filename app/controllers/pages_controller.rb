class PagesController < ApplicationController
    skip_before_action :authenticate
    
    def about
    end

    def home
        @posts = Post.image.last(2)
    end
end
