module Api
  class QnaController < ApplicationController
    skip_before_action :verify_authenticity_token

    
    def index
      @qnas = Qna.page(params[:page]).per(6)

      render json: {
        qnas: @qnas,
        meta: {
          current_page: @qnas.current_page,
          total_pages: @qnas.total_pages,
          total_count: @qnas.total_count
        }
      }
    end


    def create
      @qna = Qna.new(qna_params)
      if @qna.save
        render json: @qna, status: :created
      else
        render json: @qna.errors, status: :unprocessable_entity
      end
    end

    def new
      @qna = Qna.new
      render json: @qna
    end

    def show
      @qna = Qna.find(params[:id])
      render json: @qna
    end

    def update
      @qna = Qna.find(params[:id])
      if @qna.update(qna_params)
        render json: @qna
      else
        render json: @qna.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @qna = Qna.find(params[:id])
      if @qna.destroy
        render json: { message: "QnA deleted successfully" }, status: :ok
      else
        render json: @qna.errors, status: :unprocessable_entity
      end
    end

    private

    def qna_params
      params.permit(:title, :content)
    end
  end
end
