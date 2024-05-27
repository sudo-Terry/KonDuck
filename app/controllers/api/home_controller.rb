module Api
  class HomeController < ApplicationController
    def index
      @articles = Article.order(date: :desc).page(params[:page]).per(6)

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
