//fetch возвращает promise
//fetch по умалчанию выполняет метод GET

function sendRequest_FETCH(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

    return fetch(url, {
        method,
        // body: JSON.stringify(body),
        headers
    })
                .then(res => {
                    if (res.ok) { return res.json()}

                    return response.json().then(error => {
                        const e = new Error(`error -  ${error}`)
                        e.data = error
                        throw e
                    })
                    
                })
}

sendRequest_FETCH('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log('ERR', err))

sendRequest('POST', requestURL, {
    name: 'Akita',
    age: '1890'
})
    .then(data => console.log(data))
    .catch(err => console.log('ERR', err))