let button = document.getElementById('btnLoad');

button.addEventListener('click',function(){
    let xhr = new XMLHttpRequest()
    xhr.open(
        'get',
        'https://60d2c48c858b410017b2e2d9.mockapi.io/users',
        true
    )

    xhr.send()

    xhr.onreadystatechange = function(){
        if(xhr.readyState !=4) {
            return
        }
        if(xhr.status === 200) {
            let result = JSON.parse(xhr.responseText)

            for(let i = 0; i < result.length;i++){
                $('h2:last').after('<h2>' + result[i]['name'] + '</h2>')
            }


        } else {
            console.log('ошибка',xhr.status)
        }
    }

})
