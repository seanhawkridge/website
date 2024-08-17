class Post < ApplicationRecord
    has_rich_text :content
    has_one_attached :image
    has_one_attached :background_image

    enum :post_status,
        draft: 'draft',
        published: 'published',
        deleted: 'deleted'

    enum :post_type,
        image: 'image',
        article: 'article',
        quote: 'quote'

    def posted_on_date
        created_at.strftime("%B %d, %Y")
    end
end
