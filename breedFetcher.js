const request = require("request");

const fetchBreedDescription = function(breed) {

  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breed}`, (error, response, body) => {
    console.log('error: ', error);
    console.log('statusCode: ', response && response.statusCode);
    // console.log('body: ', body);

    if (body.length <= 2) {
      console.log('ERROR - Breed Returned =', body);
      return;
    } else {
      const data = JSON.parse(body);
      console.log(data);
    }
  });
};

module.exports = fetchBreedDescription;

