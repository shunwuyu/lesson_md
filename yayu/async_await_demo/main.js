// var fetch = require('node-fetch');
import fetch from 'node-fetch';

const fetchData = () => {
    return new Promise((resolve, reject) => {
        fetch('https://api.github.com/users/github')
            .then(data => data.json())
            .then(data => {
                resolve(data)
            })
            .catch(err => {
                console.log(err);
            })
    })
}

fetchData()
    then(data => {
        console.log(data)
    })