const dadJokeApi = {
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/dadjokes?limit=',
    headers: {'X-Api-Key': 'Vl1xAYghOi+Zar6rnklRsw==49nqPIFVcHA7M7PK'}
};
const jokeDisplays = [
    document.getElementById('joke-1'),
    document.getElementById('joke-2'),
    document.getElementById('joke-3')
]
const jokeButton = document.getElementById('joke-button');

jokeButton.addEventListener('click', () => {
    let limitText = document.getElementById('joke-input').value;
    let limit = parseInt(limitText, 10)
    fetch(dadJokeApi.url + limit, {method: dadJokeApi.method, headers: dadJokeApi.headers})
        .then(function (response) {
            return response.json()
        }).then(function (data) {
        // This is the JSON from our response
        //TODO: find a better way than this
        console.log(data[0].joke);
        for (let i = 0; i < limit; i++) {
            jokeDisplays[i].textContent = data[i].joke;
        }
    }).catch(function (error) {
        // There was an error
        console.warn(error);
    });
});
