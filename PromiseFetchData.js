const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/photos/1')
    .then(res => console.log(res.data))
    .catch(err => console.log(err));