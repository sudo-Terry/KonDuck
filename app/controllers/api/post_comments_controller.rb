module Api
    class PostCommentsController < ApplicationController
      skip_before_action :verify_authenticity_token
  
      def index
        post = Post.find(params[:board_id])
        render json: post.post_comments.order(created_at: :asc)
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
        comment = PostComment.order(created_at: :asc).find(params[:id])
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

      def like
        comment = PostComment.find(params[:id])
        user_vote = UserVote.find_or_create_by(post_comment: comment, user_name: params[:user_name]) do |vote|
          vote.vote_type = "like"
        end
      
        if user_vote.persisted? && user_vote.vote_type == "like"
          render json: { message: "You have already liked this comment." }, status: :unprocessable_entity
        else
          user_vote.update(vote_type: "like") if user_vote.vote_type != "like"
          comment.increment!(:likes)
          comment.decrement!(:dislikes) if user_vote.vote_type_was == "dislike"
          render json: comment
        end
      end
      
      def dislike
        comment = PostComment.find(params[:id])
        user_vote = UserVote.find_or_create_by(post_comment: comment, user_name: params[:user_name]) do |vote|
          vote.vote_type = "dislike"
        end
      
        if user_vote.persisted? && user_vote.vote_type == "dislike"
          render json: { message: "You have already disliked this comment." }, status: :unprocessable_entity
        else
          user_vote.update(vote_type: "dislike") if user_vote.vote_type != "dislike"
          comment.increment!(:dislikes)
          comment.decrement!(:likes) if user_vote.vote_type_was == "like"
          render json: comment
        end
      end
      
  
      def comment_params
        params.permit(:content, :user_name, :user_password)
      end
    end
  end
  