var transport = new XMLHttpRequest ()

transport.open (
    "GET",
    "https://www.random.org/strings/?num=10&len=20&digits=on&upperalpha=on&loweralpha=on&unique=on&format=plain&rnd=new"
)

transport.onload = function ( event ) {
   this.status === 200 ? 
       console.log ( this.responseText ) :
       null
}

transport.send()