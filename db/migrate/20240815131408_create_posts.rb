class CreatePosts < ActiveRecord::Migration[7.2]
  def change
    create_enum :type, [ "article", "image", "quote" ]
    create_enum :status, [ "draft", "published", "deleted" ]

    create_table :posts do |t|
      t.text :title
      t.text :body
      t.string :author
      t.enum :post_type, enum_type: :type, default: "article"
      t.enum :post_status, enum_type: :status, default: "draft"

      t.timestamps
    end
  end
end
