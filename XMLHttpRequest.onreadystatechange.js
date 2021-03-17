var transport = new XMLHttpRequest ()

transport.onreadystatechange = function ( event ) {
   if ( this.readyState === 4 && 
        this.status === 200 ) 
           console.log ( event )
}