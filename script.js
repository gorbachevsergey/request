const button = document.getElementById('btnLoad'); // присваем переменной id элемента


button.addEventListener('click',function(){ // добавляем прослушку на кнопку, при активации кнопки запуститься функция
    $('li').remove(); // удаляем все элементы списка
    let xhr = new XMLHttpRequest() // Создаем XMLHttpRequest для выполнения запроса
    xhr.open(   // инициализируем запрос
        'get', // типа запроса
        'https://60d2c48c858b410017b2e2d9.mockapi.io/users', // адресс сервера
        true // логичиеское выражение определает должен ли запрос быть асинхронным
    )
    xhr.send() // устанавливаем соединение и отсылаем запрос к серверу
    xhr.onreadystatechange = function() { //срабатывает обработчик событий в результате чего вызывается функция
        if (xhr.readyState != 4) { // проверяем что xhr полностью завершена, если нет то делаем return
            return
        }
        if (xhr.status === 200) {// проверяем статус, 200 означает успешный запрос
            try {
                let result = JSON.parse(xhr.response); // сохраняем в перменную данные полученные в результате ответа
                for (let i = 0; i < result.length; i++) {
                    $('ul:first').after('<li>' + result[i]['name'] + '</li>').innerHTML = xhr.responseText;// запускаем функцию цель которой перебать все данный в переменной result и добавить их в список на html страницу
                    }

        } catch (e){
            alert('Ошибка: ' + e.message)} //ловим ошибку если вдруг ошибилсь в переменных в данном случае
        }
    }

})
