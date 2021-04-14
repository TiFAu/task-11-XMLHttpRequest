var request = new XMLHttpRequest()
request.open (
    "POST",
    'https://httpbin.org/post',
    true 
)

request.setRequestHeader (
    "Content-Type",
    "application/x-www-form-urlencoded"
)

request.onreadystatechange = function() {
   if (
      this.readyState === 4
      && this.status === 200 
   ) {
        console.log ( 'success' )
        console.log ( this.responseText )
   }
}
request.send ( "name=garevna&speciality=frontEnd" )