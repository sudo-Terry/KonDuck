class Article < ApplicationRecord
  belongs_to :company

  validates :text, presence: true
  validates :url, uniqueness: true
end
