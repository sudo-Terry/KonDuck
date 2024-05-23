class HomeController < ApplicationController
  def index
    @articles = Article.all

    render json: @articles
  end

  def create 
    @articles =Article.new(article_params)
    @articles.save!
    render json: @articles
  end

  def update
    if @article.update(article_params)
      render json: @articles
  end
    
  def destroy
    @article.destroy
  end

    
  
  end
  private
  def article_params
    params.require(:article).permit(:title, :text, :url, :company_id)
  end
end
