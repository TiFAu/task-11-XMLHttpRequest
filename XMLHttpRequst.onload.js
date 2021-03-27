var request = new XMLHttpRequest
request.open (
    "get",
    'https://www.random.org/integers/?num=10&min=0&max=255&col=1&base=16&format=plain&rnd=new'
)

request.onload = function() {
   if ( this.status === 200 ) {
        console.log ( this.response )
   }
}
request.send ()