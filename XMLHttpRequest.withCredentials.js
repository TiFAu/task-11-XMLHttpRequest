var obj = {
    provider: "Google",
    type: "service",
    eco: "git"
}

var request = new XMLHttpRequest
request.open (
    "POST",
    'http://ptsv2.com/t/d8uw9-1614284335/post'
)

request.withCredentials = true
request.setRequestHeader (
    "Content-Type",
    "application/json"
)

request.onload = function() {
   if ( this.status === 200 ) {
        console.log ( this.response )
   }
}
request.send ( JSON.stringify ( obj ) )