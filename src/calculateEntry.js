const { prices } = require('../data/zoo_data');

const boringLinter = (age, object) => {
  const newObject = object;
  if (age >= 50) {
    newObject.senior = newObject.senior + 1 || 1;
  } else {
    newObject.adult = newObject.adult + 1 || 1;
  }
  return newObject;
};

const ageCounter = (age, object) => {
  const newObject = object;
  if (age >= 18) {
    boringLinter(age, object);
  } else {
    newObject.child = newObject.child + 1 || 1;
  }
  return newObject;
};

const calcTotalPrice = (visitors) => {
  let totalPrice = 0;
  if (visitors.child > 0) {
    totalPrice += prices.child * visitors.child;
  }
  if (visitors.adult > 0) {
    totalPrice += prices.adult * visitors.adult;
  }
  if (visitors.senior > 0) {
    totalPrice += prices.senior * visitors.senior;
  }
  return totalPrice;
};

const countEntrants = (entrants) =>
  entrants.reduce((object, people) => ageCounter(people.age, object), {});

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitors = countEntrants(entrants);
  return calcTotalPrice(visitors);
}

module.exports = { calculateEntry, countEntrants };
