const gps = require('./src/gps');
const update = require('./src/requests');
const {
  parser,
} = require('./lib/utils.js');

const prepareToUpdate = (function () {
  let counter = 0;
  let gpsPackage = [];
  return (gpsInfo) => {
    gpsPackage.push(gpsInfo);
    counter += 1;
    if (counter >= 10) {
      update(gpsPackage);
      counter = 0;
      gpsPackage = [];
    }
  };
}());

gps.on('data', (data) => {
  const parts = data.split(',');
  if (parts[0] === '$GPRMC' && parts[2] !== 'V') {
    prepareToUpdate(parser(parts));
  }
});

gps.on('error', (err) => {
  console.log('Error: ', err.message);
});
