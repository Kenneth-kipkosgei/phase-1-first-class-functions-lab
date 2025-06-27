// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array containing the two driver-selecting functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Returns a function that multiplies fares
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// 5. Double the fare
const fareDoubler = createFareMultiplier(2);

// 6. Triple the fare
const fareTripler = createFareMultiplier(3);

// 7. Apply one of the driver selectors to an array of drivers
const selectDifferentDrivers = function(drivers, fn) {
  return fn(drivers);
};
