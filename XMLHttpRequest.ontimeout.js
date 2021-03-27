var request = new XMLHttpRequest()
request.open (
    "POST",
    'https://httpbin.org/post'
)

request.setRequestHeader (
    "Content-Type",
    "application/x-www-form-urlencoded"
)

request.timeout = 100

request.ontimeout = function( event ) {
   console.log ( event )
}