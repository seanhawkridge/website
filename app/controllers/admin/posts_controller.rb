class Admin::PostsController < ApplicationController
    
    def new
        @post = Post.new
    end

    def create
        @post = Post.create(post_params)
        redirect_to edit_admin_post_path(@post)
    end

    def new_image_post
        @post = Post.new
    end
    
    def create_image_post
        @post = Post.new(post_type: 'image', post_status: 'published')
        @post.image.attach(post_params[:image]) if post_params[:image].present?
        @post.save!
        redirect_to :root
    end

    def edit
        @post ||= Post.find(params[:id])
    end

    def update
        @post = Post.find(params[:id])
        @post.background_image.attach(post_params[:background_image]) if post_params[:background_image].present?

        @post.image.attach(post_params[:image]) if post_params[:image].present?

        @post.update(post_params)

        redirect_to edit_admin_post_path(@post)
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy

        redirect_to :root
    end

    def update_status
        @post = Post.find(params[:id])
        @post.update_attribute(:post_status, params[:post_status])

        redirect_to edit_admin_post_path(@post)
    end

    private

    def post_params
        params.require(:post).permit(:id, :title, :content, :image, :background_image, :author, :post_type, :post_status)
    end
end