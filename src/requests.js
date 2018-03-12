const {
  Client,
} = require('node-rest-client');
const tla = require('../config/config.json').bbb;

const client = new Client();

const update = (gpsData) => {
  const gpsUpdate = {
    data: {
      macAddress: tla.macAddress,
      username: tla.username,
      gpsPackage: {
        date: gpsData.date,
        time: gpsData.time,
        status: gpsData.status,
        lat: gpsData.lat,
        lon: gpsData.lon,
        speed: gpsData.speed,
        direction: gpsData.direction,
      },
    },
    headers: {
      'Content-Type': 'application/json',
    },
  };
  client.put(`http://192.168.0.27:3000/api/tla/${tla.id}`, gpsUpdate, (response) => {
    console.log('Server Response OK:');
    console.log(response);
  });
};

module.exports.update = update;
