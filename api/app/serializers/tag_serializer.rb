class TagSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :project
  belongs_to :thought
end
