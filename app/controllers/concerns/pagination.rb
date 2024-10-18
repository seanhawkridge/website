module Pagination
  extend ActiveSupport::Concern

  def default_per_page
    5
  end

  def page_no
    params[:page]&.to_i || 1
  end

  def per_page
    params[:per_page]&.to_i || default_per_page
  end

  def paginate_offset
    (page_no-1)*per_page
  end

  def paginate
    ->(it) { it.limit(per_page).offset(paginate_offset) }
  end

  def next_page
    page_no + 1 if page_no < total_pages
  end

  def previous_page
    page_no - 1 if page_no > 1
  end

  def count
    Post.count
  end

  def total_pages
    (count.to_f / per_page).ceil
  end
end
