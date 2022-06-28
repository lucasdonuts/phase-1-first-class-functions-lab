const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
  const fareMultiplier = fare => fare * num;

  return fareMultiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, firstOrLast) {
  return firstOrLast(drivers);
}