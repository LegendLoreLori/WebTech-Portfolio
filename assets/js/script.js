const limit = 3;
const dadJokeApi = {
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/dadjokes?limit=' + limit,
    headers: {'X-Api-Key': 'Vl1xAYghOi+Zar6rnklRsw==49nqPIFVcHA7M7PK'}
};
//TODO: create an array of dom elements
let joke1 = document.getElementById('joke-1');
let joke2 = document.getElementById('joke-2');
let joke3 = document.getElementById('joke-3');
const jokeButton = document.getElementById('joke-button');

jokeButton.addEventListener('click', () => {
    fetch(dadJokeApi.url, {method: dadJokeApi.method, headers: dadJokeApi.headers})
        .then(function (response){
            return response.json()
    }).then(function (data) {
        // This is the JSON from our response
        //TODO: find a better way than this
        console.log(data[0].joke);
        //TODO: refactor to for loop
        //TODO: format text
        joke1.textContent = data[0].joke;
        joke2.textContent = data[1].joke;
        joke3.textContent = data[2].joke;
    }).catch(function (error) {
        // There was an error
        console.warn(error);
    });
});
