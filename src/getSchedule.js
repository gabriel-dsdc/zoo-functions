const { species, hours } = require('../data/zoo_data');

let isValid = false;
const withoutParam = () => species.reduce((newObject) => {
  const object = newObject;
  Object.keys(hours).forEach((day) => {
    const allSpeciesAvailable = species.filter((animal) => animal.availability.includes(day))
      .map((animalName) => animalName.name);
    object[day] = {
      officeHour: day !== 'Monday' ? `Open from ${hours[day].open}am\
 until ${hours[day].close}pm` : 'CLOSED',
      exhibition: day !== 'Monday' ? allSpeciesAvailable : 'The zoo will be closed!',
    };
  });
  return object;
}, {});

const isHour = (scheduleTarget) => {
  const speciesAvailable = species.filter((specie) => specie.availability.includes(scheduleTarget))
    .map((animal) => animal.name);
  return {
    [scheduleTarget]: {
      officeHour: scheduleTarget !== 'Monday' ? `Open from ${hours[scheduleTarget].open}am\
 until ${hours[scheduleTarget].close}pm` : 'CLOSED',
      exhibition: scheduleTarget !== 'Monday' ? speciesAvailable : 'The zoo will be closed!',
    } };
};

const withParam = (scheduleTarget) => {
  if (Object.keys(hours).includes(scheduleTarget)) {
    isValid = true;
    return isHour(scheduleTarget);
  }
  return species.reduce((acc, specie) => {
    let availability = acc;
    if (specie.name === scheduleTarget) {
      isValid = true;
      availability = specie.availability;
    }
    return availability;
  }, []);
};

function getSchedule(scheduleTarget) {
  withParam(scheduleTarget);
  if (scheduleTarget && isValid) {
    return withParam(scheduleTarget);
  }
  return withoutParam();
}

module.exports = getSchedule;
