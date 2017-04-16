$overlay = $('<div id="overlay"></div>')
$image = $('<img>')
#An image to overlay
$overlay.append $image
#Add overlay
$('body').append $overlay
#Capture the click event on a link to an image
$('#week .photo a').click (event) ->
  event.preventDefault()
  imageLocation = $(this).attr('href')
  #Update overlay with the image linked in the link
  $image.attr 'src', imageLocation
  #Show the overlay.
  $overlay.show()
  return
#When overlay is clicked
$overlay.click ->
  #Hide the overlay
  $overlay.hide()
  return
