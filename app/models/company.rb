class Company < ApplicationRecord
  primary key = 'id'

  has_many :articles
end
