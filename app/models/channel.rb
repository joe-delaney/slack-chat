class Channel < ApplicationRecord
    validates :creator_id, :name, presence:true

    belongs_to :channel_creator,
        foreign_key: :creator_id,
        class_name: :User

    def self.search(query) 
        channels = Channel.where("channels.name ILIKE '#{query}%'")
        channels
    end
end