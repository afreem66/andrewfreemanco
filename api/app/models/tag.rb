class Tag < ApplicationRecord
  belongs_to :project
  belongs_to :thought
end
