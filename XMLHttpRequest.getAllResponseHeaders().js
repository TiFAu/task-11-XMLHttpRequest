var transport = new XMLHttpRequest ()                   // создаем тело запроса

transport.onload = function ( event ) {                 // задаем функцию обработчик окончания благополучной загрузки с сервера
    console.dir ( this.getAllResponseHeaders() )        // выводящую заголовки ответа
}
transport.open (                                        // комутируем соединение
    'GET',                                              // метод доступа к данным
    'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js' // адрес
)
transport.send()                                         // отправляем запрос           
/*
Заголовки ответа сервера:

cache-control: public, max-age=31536000, stale-while-revalidate=2592000
content-length: 30089
content-type: text/javascript; charset=UTF-8
expires: Tue, 12 Apr 2022 12:24:52 GMT
last-modified: Tue, 03 Mar 2020 19:15:00 GMT
*/