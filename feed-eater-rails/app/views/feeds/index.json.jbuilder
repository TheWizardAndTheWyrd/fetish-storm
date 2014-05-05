json.array!(@feeds) do |feed|
  json.extract! feed, :id
  json.url feed_url(feed, format: :json)
end
