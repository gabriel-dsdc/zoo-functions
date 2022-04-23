const { species, employees } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  let age = 0;
  const responsibleSpecie = employees.find((employee) => id === employee.id).responsibleFor[0];
  const animals = species.find((specie) => responsibleSpecie === specie.id).residents;
  return animals.reduce((acc, animal) => {
    let oldestAnimal = acc;
    if (animal.age >= age) {
      age = animal.age;
      oldestAnimal = animal;
    }
    return Object.values(oldestAnimal);
  }, []);
};

module.exports = getOldestFromFirstSpecies;
