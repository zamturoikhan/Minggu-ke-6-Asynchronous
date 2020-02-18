const axios = require('axios');

const belajarAsync = async () => {
    try{ 
    const reponse = await axios.get('https://jsonplaceholder.typicode.com/photos/1');
    const data = await reponse.data;
    console.log('albumId = ' + data.albumId);
    console.log('id = ' + data.id);
    console.log('title = ' + data.title);
    console.log('url = ' + data.url);
    console.log('thumbnailUrl = ' + data.thumbnailUrl);
    } catch (eror){
      console.log(eror); 
    }
    }
belajarAsync();