function getFileFromServer ( url ) {
    var request = new XMLHttpRequest ()

    request.onload = function () {
        document.body.innerHTML += this.responseText
    }
    request.onerror = function ( err ) {
        document.body.innerHTML += err.message
    }
    request.open ( "GET", url )
    request.send ()
}