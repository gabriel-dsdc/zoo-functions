const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids.reduce((animalsArray, currentParam, index) => {
  const foundAnimal = species.find((animal) => animal.id === ids[index]);
  animalsArray.push(foundAnimal);
  return animalsArray;
}, []);

module.exports = getSpeciesByIds;
