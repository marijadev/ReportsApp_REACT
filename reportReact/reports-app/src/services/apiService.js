const myFetchGET = (url) => {
    let requestOptions = {
        method: 'GET'
        // headers = {}
    }
    return fetch(url, requestOptions)
        .then(response => response.json())
}

export { myFetchGET };