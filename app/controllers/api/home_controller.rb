module Api
  class HomeController < ApplicationController
    def index
      @articles = Article.all

      if params[:company_id].present?
        company_ids = params[:company_id].split(',').map(&:to_i)
        @articles = @articles.where(company_id: company_ids)
      end

      @articles = @articles.order(date: :desc).page(params[:page]).per(6)

      render json: {
        articles: @articles,
        meta: {
          current_page: @articles.current_page,
          total_pages: @articles.total_pages,
          total_count: @articles.total_count
        }
      }
    end
  end
end
