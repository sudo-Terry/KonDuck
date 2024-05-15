class Article < ApplicationRecord
  belongs_to :company

  validates :url, uniqueness: true
end
