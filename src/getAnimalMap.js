const { species } = require('../data/zoo_data');

const sortAnimals = (residentsName, sorted) => {
  if (sorted) {
    return residentsName.sort((a, b) => (a > b ? 1 : -1));
  }
  return residentsName;
};

const withNames = (residents, options) => {
  const residentsName = [];
  const { includeNames, sex, sorted } = options;

  residents.forEach((resident) => {
    if (!sex && includeNames) {
      residentsName.push(resident.name);
    }
    if (sex === resident.sex && includeNames) {
      residentsName.push(resident.name);
    }
  });
  return sortAnimals(residentsName, sorted);
};

const getAnimalMap = (options) => species.reduce((newObject, specie) => {
  const object = newObject;
  const { name, location, residents } = specie;

  if (!options || !options.includeNames) {
    object[location].push(name);
  } else {
    const residentsName = withNames(residents, options);
    object[location].push({ [name]: residentsName });
  }
  return object;
}, { NE: [], NW: [], SE: [], SW: [] });

module.exports = getAnimalMap;
