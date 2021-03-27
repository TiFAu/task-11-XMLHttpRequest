var request = new XMLHttpRequest()
request.open (
    "get",
    'https://httpbin.org/get',
    true 
)
request.responseType = "arraybuffer";

request.onloadstart = function( event ) {
   console.log ( 'START' )
}
request.onloadend = function( event ) {
   console.log ( 'END' )
}
request.onprogress = function( event ) {
   console.log ( `progress: ${event.loaded} / ${event.total}` )
}
request.onload = function( event ) {
   console.log ( this.response )
}
request.send ()