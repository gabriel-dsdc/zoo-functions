const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const foundAnimal = species.find((specie) => specie.name === animal);
  return foundAnimal.residents.every((specie) => specie.age >= age);
};

module.exports = getAnimalsOlderThan;
