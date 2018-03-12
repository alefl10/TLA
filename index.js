const gps = require('./src/gps');
const update = require('./src/requests');
const {
  parser,
} = require('./lib/utils.js');

gps.on('data', (data) => {
  const parts = data.split(',');
  if (parts[0] === '$GPRMC' && parts[2] !== 'V') {
    const gpsInfo = parser(parts);
    update(gpsInfo);
  }
});

gps.on('error', (err) => {
  console.log('Error: ', err.message);
});
