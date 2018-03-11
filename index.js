const gps = require('./src/gps');
const {
  parser,
} = require('./lib/utils.js');

gps.on('data', (data) => {
  console.log(`Data Received: ${data}`);
  const parts = data.split(',');
  if (parts[0] === '$GPRMC' && parts[2] !== 'V') {
    const gpsInfo = parser(parts);
    console.log(gpsInfo);
  }
});

gps.on('error', (err) => {
  console.log('Error: ', err.message);
});
