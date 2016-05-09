class ThoughtSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :author, :date
  has_many :tags
end
