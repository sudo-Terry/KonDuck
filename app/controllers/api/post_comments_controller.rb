module Api
    class PostCommentsController < ApplicationController
      skip_before_action :verify_authenticity_token
  
      def index
        post = Post.find(params[:board_id])
        render json: post.post_comments
      end
      
      def new
        post = Post.find(params[:board_id])
        comment = post.post_comments.build
        render json: comment
      end
      
      def create
        post = Post.find(params[:board_id])
        comment = post.post_comments.build(comment_params)
        if comment.save
          render json: comment, status: :created
        else
          render json: comment.errors, status: :unprocessable_entity
        end
      end
  
      def show
        comment = PostComment.find(params[:id])
        render json: comment
      end
  
      def update
        comment = PostComment.find(params[:id])
        if comment.update(comment_params)
          render json: comment
        else
          render json: comment.errors, status: :unprocessable_entity
        end
      end

      def destroy
        comment = PostComment.find(params[:id])
        if comment.destroy
          render json: { message: "Comment successfully deleted." }, status: :ok
        else
          render json: comment.errors, status: :unprocessable_entity
        end
      end
  
      private
  
      def comment_params
        params.permit(:content, :user_name, :user_password)
      end
    end
  end
  