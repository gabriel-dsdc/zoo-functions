const { species, employees } = require('../data/zoo_data');

const responsibleArray = (employee) => {
  const speciesArray = [];
  const locationsArray = [];
  return species.reduce((acc, specie) => {
    employee.responsibleFor.forEach((value) => {
      if (specie.id === value) {
        speciesArray.push(specie.name);
        locationsArray.push(specie.location);
      }
    });
    return acc;
  }, [speciesArray, locationsArray]);
};

const validParam = (person) => {
  const key = Object.keys(person);
  return employees.some((employee) => {
    const { id, firstName, lastName } = employee;
    return [id, firstName, lastName].includes(person[key]);
  });
};

const getEmployee = (person, key) => employees.reduce((acc, employee) => {
  const object = acc;
  const { id, firstName, lastName } = employee;
  if ([id, firstName, lastName].includes(person[key])) {
    object.id = id;
    object.fullName = `${firstName} ${lastName}`;
    const [speciesArray, locationsArray] = responsibleArray(employee);
    object.species = speciesArray;
    object.locations = locationsArray;
  }
  return object;
}, {});

const getAllEmployees = () => {
  const newArray = [];
  employees.forEach((employee) => {
    const object = {};
    const { id, firstName, lastName } = employee;
    object.id = id;
    object.fullName = `${firstName} ${lastName}`;
    const [speciesArray, locationsArray] = responsibleArray(employee);
    object.species = speciesArray;
    object.locations = locationsArray;
    newArray.push(object);
  }, {});
  return newArray;
};

const getEmployeesCoverage = (person) => {
  if (person && validParam(person)) {
    const key = Object.keys(person);
    return getEmployee(person, key);
  } if (!person) {
    return getAllEmployees();
  }
  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
