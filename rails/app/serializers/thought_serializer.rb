class ThoughtSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :author, :posted_date
end
