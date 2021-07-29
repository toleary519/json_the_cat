const request = require("request");

const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search/?q=${breed}`, (error, response, body) => {
  console.log('error: ', error);
  console.log('statusCode: ', response && response.statusCode);
  // console.log('body: ', body);

  if (body.length <= 2) {
    console.log('ERROR - Breed Undefined - Body recieved =', body);
    return;
  } else {
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
  }
});
