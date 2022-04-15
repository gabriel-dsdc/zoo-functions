const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) =>
  (!employeeName ? {}
    : employees.find((employee) => (
      employee.firstName === employeeName
      || employee.lastName === employeeName)));

module.exports = getEmployeeByName;
