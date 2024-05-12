# app/models/company.rb
class Company < ApplicationRecord
    self.primary_key = 'id' # Assuming 'id' is the primary key column
  
    has_many :articles
  end

