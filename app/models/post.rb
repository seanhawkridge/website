class Post < ApplicationRecord
    has_rich_text :content
    has_one_attached :image
    has_one_attached :background_image
end
