const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const foundAnimal = species.find((specie) => specie.name === animal);
  return foundAnimal.residents.every((specie) => specie.age >= age);
}

module.exports = getAnimalsOlderThan;
