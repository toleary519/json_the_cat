const request = require("request");

const fetchBreedDescription = function(breed, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breed}`, (error, response, desc) => {
    console.log('error: ', error);
    console.log('statusCode: ', response && response.statusCode);
    // console.log('desc: ', desc);

    if (desc.length <= 2) {
      callback("ERROR:", null);
      return;
    } else {
      const data = JSON.parse(desc);
      callback(null, data[0].description);
    }
  });
};

module.exports = fetchBreedDescription;

