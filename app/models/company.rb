class Company < ApplicationRecord
    self.primary key = 'id'

    has_many :articles
end
