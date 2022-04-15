const { species } = require('../data/zoo_data');

const countAll = () =>
  species.reduce((newObject, animals) => {
    const count = animals.residents.reduce((counter) => counter + 1, 0);
    const object = newObject; // ESlint...
    object[animals.name] = count;
    return object;
  }, {});

const countAnimals = (animal) => {
  if (!animal) {
    return countAll();
  }
  const { specie, sex } = animal;
  return species.find((chosenAnimal) => chosenAnimal.name === specie)
    .residents.reduce((count, animals) => {
      if (animals.sex === sex) {
        return count + 1;
      }
      if (!sex) {
        return count + 1;
      }
      return count;
    }, 0);
};

module.exports = countAnimals;
