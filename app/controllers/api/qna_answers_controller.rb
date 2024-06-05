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
  
      private
  
      def answer_params
        params.require(:qna_answer).permit(:answer, :user_name, :user_password)
      end
    end
  end
  