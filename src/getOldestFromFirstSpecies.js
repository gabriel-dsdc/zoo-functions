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

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = getOldestFromFirstSpecies;
// ['Maxwell', 'male', 15]
