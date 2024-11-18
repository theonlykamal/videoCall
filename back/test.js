const axios = require('axios');

axios.get('http://localhost:2500/').then((response) => {
    console.log(response.data);
}).catch(err => {
    console.log(err);
})