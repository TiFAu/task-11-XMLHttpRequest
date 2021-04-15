var request = new XMLHttpRequest()              // создаем экземпляр запроса
request.open (                                  // комутируем запрос 
    "get",                                      // метод get
    'https://httpbin.org/get'                   // адрес
)
request.responseType = "arraybuffer"            // задаем тип ответа

request.onreadystatechange = function() {       // задаем калбеэк функцию которая вызывается при изменении readyState
   if (                                         // если 
      this.readyState === 4                     // процесс загрузки ответа завершен
      && this.status === 200                    // загрузка ответа завершена 
   ) {
        console.log ( this.response )           // выводим в консоль ответ
   }
}
request.send ()                                 // отправляем запрос на сервер