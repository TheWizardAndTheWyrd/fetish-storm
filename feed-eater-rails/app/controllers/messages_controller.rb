class MessagesController < ApplicationController
  include ActionController::Live

  def create
    # This is just a sample method from Ryan Bates.
    # This should write to a channel that will be consumed by Storm
    response.headers["Content-Type"] = "text/javascript"
    attributes = params.requires(:message).permit(:content, :name)
    @message = Message.create(attributes)
    $redis.publish('message.create', @message.to_json)
  end

  def events
    response.headers["Content-Type"] = "text/event-stream"
    redis = Redis.new
    redis.psubscribe('feeds') do |on|
      on.pmessage do |pattern, event, data|
        response.stream.write("event: #{event}\n")
        response.stream.write("data: #{data}\n\n")
      end
    end
  rescue IOError
    logger.info "Stream closed"
  ensure
    redis.quit
    response.stream.close
  end

  def show
    events
  end

  def index
    events
  end

end
