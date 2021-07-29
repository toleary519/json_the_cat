
const fetchBreedDescription = require('./breedFetcher');

const breed = process.argv[2];

fetchBreedDescription(breed, (err, description) => {
  if (err) {
    console.log("Error in fetch:", err);
  } else {
    console.log(description);
  }
});