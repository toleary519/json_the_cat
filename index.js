
const fetchBreedDescription = require('./breedFetcher');

const breed = process.argv[2];

fetchBreedDescription(breed, (err, desc) => {
  if (err) {
    console.log(err);
  } else {
    console.log(desc);
  }
});