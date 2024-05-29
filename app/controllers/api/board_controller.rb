module Api
  class BoardController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
      @posts = Post.page(params[:page]).per(5)

      render json: {
        posts: @posts,
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
      params.permit(:title, :content)
    end
  end

  def show
    @post = Post.find(params[:id])
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :category)
  end
end
