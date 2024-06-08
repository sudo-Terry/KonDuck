module Api
    class QnaAnswersController < ApplicationController
      skip_before_action :verify_authenticity_token
  
      def index
        qna = Qna.find(params[:qna_id])
        render json: qna.qna_answers
      end
  
      def show
        answer = QnaAnswer.find(params[:id])
        render json: answer
      end
  
      def create
        qna = Qna.find(params[:qna_id])
        answer = qna.qna_answers.build(answer_params)
        if answer.save
          render json: answer, status: :created
        else
          render json: answer.errors, status: :unprocessable_entity
        end
      end
  
      def update
        answer = QnaAnswer.find(params[:id])
        if answer.update(answer_params)
          render json: answer
        else
          render json: answer.errors, status: :unprocessable_entity
        end
      end
  
      def destroy
        answer = QnaAnswer.find(params[:id])
        if answer.destroy
          render json: { message: "Answer successfully deleted." }, status: :ok
        else
          render json: answer.errors, status: :unprocessable_entity
        end
      end

      def like
        answer = QnaAnswer.find(params[:id])
        user_vote = UserVote.find_or_create_by(qna_answer: answer, user_name: params[:user_name])
      
        if user_vote.persisted? && user_vote.vote_type == "like"
          render json: { message: "You have already liked this answer." }, status: :unprocessable_entity
        else
          if user_vote.vote_type != "like"
            user_vote.update(vote_type: "like")
            answer.increment!(:likes)
            answer.decrement!(:dislikes) if user_vote.vote_type_was == "dislike"
          else
            answer.increment!(:likes)
          end
          render json: answer
        end
      end
      
      def dislike
        answer = QnaAnswer.find(params[:id])
        user_vote = UserVote.find_or_create_by(qna_answer: answer, user_name: params[:user_name])
      
        if user_vote.persisted? && user_vote.vote_type == "dislike"
          render json: { message: "You have already disliked this answer." }, status: :unprocessable_entity
        else
          if user_vote.vote_type != "dislike"
            user_vote.update(vote_type: "dislike")
            answer.increment!(:dislikes)
            answer.decrement!(:likes) if user_vote.vote_type_was == "like"
          else
            answer.increment!(:dislikes)
          end
          render json: answer
        end
      end

      def select_answer
        qna = Qna.find(params[:qna_id])
        answer = qna.qna_answers.find(params[:id])
  
        if qna.user_name == params[:user_name]
          qna.qna_answers.update_all(selected: false) 
          answer.update(selected: true)
          render json: { message: "Answer selected successfully." }, status: :ok
        else
          render json: { message: "Only the question owner can select an answer." }, status: :forbidden
        end
      end
      
  
      private
  
      def answer_params
        params.require(:qna_answer).permit(:answer, :user_name, :user_password)
      end
    end
  end
  