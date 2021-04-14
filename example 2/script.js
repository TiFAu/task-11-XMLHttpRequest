var request = new XMLHttpRequest ()

request.onreadystatechange = function () {
    document.querySelector( "#readyState" )
              .innerHTML = request.readyState
    document.querySelector( "#status" )
              .innerHTML = request.status
    if ( this.readyState === 4 ) {
        if ( this.status === 200 ) 
          document.querySelector ("#response")
              .innerHTML = this.responseText
    }
}

request.open ( "GET", "student.json")
request.send ()

function parseToJson () {
    student = JSON.parse ( 
          document.querySelector ("#response").innerHTML 
        )
    document.querySelector ("#response").innerHTML = ""
    for ( var x in student ) {
        var elem = document.createElement ( 'p' )
        elem.innerHTML = x + ": " + student [x]
        document.querySelector ( "#response" )
                          .appendChild ( elem )
    }
    document.querySelector ("button").innerHTML = "stringify JSON"
    document.querySelector ("button").onclick = stringifyObject
}

function stringifyObject () {
    document.querySelector ("#response").innerHTML = JSON.stringify ( student )
    document.querySelector ("button").innerHTML = "parse JSON"
    document.querySelector ("button").onclick = parseToJson
}

var sudent = null
