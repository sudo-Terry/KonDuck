class PostsController < ApplicationController
    def index
        @posts = Post.all
        render json: @posts
    end

    def create
        @post = Post.new(post_params)
        
        if @post.save
          render json: @post, status: :created
        else
          render json: @post.errors, status: :unprocessable_entity
        end
    end

    def update
        if @post.update(post_params)
          render json: @post
        else
          render json: @post.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @post.destroy
        head :no_content
    end

    private

    def post_params
        params.require(:post).permit(:title, :content)
    end

end
