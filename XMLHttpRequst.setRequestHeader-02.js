var transport = new XMLHttpRequest()
transport.open (
    "POST",
    'http://ptsv2.com/t/d8uw9-1614284335/post',
    true
)

transport.setRequestHeader (
    "Content-Type",
    "application/x-www-form-urlencoded" 
)

transport.onreadystatechange = function() {
   if( this.readyState === XMLHttpRequest.DONE &&
       this.status === 200 ) {
        console.log ( 'success' )
        console.log ( this.responseText )
   }
}
transport.send ( "name=d8uw9-1614284335&speciality=frontEnd" )