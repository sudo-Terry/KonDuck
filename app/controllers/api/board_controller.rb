module Api
  class BoardController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
      @posts = Post.order(created_at: :desc).page(params[:page]).per(5)
      posts_with_comments_count = @posts.map { |post| post.as_json.merge(comment_count: post.comment_count) }

      render json: {
        posts: posts_with_comments_count,
        meta: {
          current_page: @posts.current_page,
          total_pages: @posts.total_pages,
          total_count: @posts.total_count
        }
      }
    end

    def new
      @post = Post.new
      render json: @post
    end

    def create
      @post = Post.new(post_params)
      if @post.save
        render json: @post, status: :created, location: api_board_url(@post)
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end

    def show
      @post = Post.find(params[:id])
      render json: @post
    end

    def update
      @post = Post.find(params[:id])
      if @post.update(post_params)
        render json: @post
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @post = Post.find(params[:id])
      if @post.destroy
        render json: { message: "Post successfully deleted." }, status: :ok
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end

    private

    def post_params
      params.require(:post).permit(:title, :content, :user_name, :user_password)
    end
  end
end
