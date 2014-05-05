###
source = new EventSource('/messages/event')
source.addEventListener 'messages.create', (e) ->
  message = $.parseJSON(e.data).message
  $('#feed').append($('<li>').text("#{message.name}: #{message.content}"))
###
