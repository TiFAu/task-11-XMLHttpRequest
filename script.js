//https://plnkr.co/edit/b5gXN9q5FdturHenpo3b?p=preview&preview
let request = new XMLHttpRequest ()

request.onreadystatechange = function () {
    if ( this.readyState === 4 ) {
        if ( this.status === 200 ) 
          document.body.innerHTML += this.responseText
    }
}

request.open ( "GET", "message.txt")
request.send ()