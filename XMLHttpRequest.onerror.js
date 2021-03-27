var transport = new XMLHttpRequest ()

transport.onerror = function ( err ) {
    console.log ( this.responseText )
}