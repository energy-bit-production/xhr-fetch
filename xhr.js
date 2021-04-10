//GET get data
//POST create data
//PUT   upgrade element

const requestURL = `https://jsonplaceholder.typicode.com/users`

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject('ERROR', xhr.response)
            }
            resolve(xhr.response)
        }

        xhr.onerror = () => {
            reject('error', xhr.response)
        }

        xhr.send(JSON.stringify(body))

    })
}

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log('ERR', err))

//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*

// sendRequest('POST', requestURL, {
//     name: 'Akita',
//     age: '1890'
// })
//     .then(data => console.log(data))
//     .catch(err => console.log('ERR', err))