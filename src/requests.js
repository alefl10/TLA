const {
  Client,
} = require('node-rest-client');
const tla = require('../config/config.json').bbb;
const test = require('../lib/ledTests');

const client = new Client();

const update = (gpsData) => {
  const gpsUpdate = {
    data: {
      macAddress: tla.macAddress,
      username: tla.username,
      gpsPackage: [{
        date: gpsData[0].date,
        time: gpsData[0].time,
        status: gpsData[0].status,
        lat: gpsData[0].lat,
        lon: gpsData[0].lon,
        speed: gpsData[0].speed,
        direction: gpsData[0].direction,
      },
      {
        date: gpsData[1].date,
        time: gpsData[1].time,
        status: gpsData[1].status,
        lat: gpsData[1].lat,
        lon: gpsData[1].lon,
        speed: gpsData[1].speed,
        direction: gpsData[1].direction,
      },
      {
        date: gpsData[2].date,
        time: gpsData[2].time,
        status: gpsData[2].status,
        lat: gpsData[2].lat,
        lon: gpsData[2].lon,
        speed: gpsData[2].speed,
        direction: gpsData[2].direction,
      },
      {
        date: gpsData[3].date,
        time: gpsData[3].time,
        status: gpsData[3].status,
        lat: gpsData[3].lat,
        lon: gpsData[3].lon,
        speed: gpsData[3].speed,
        direction: gpsData[3].direction,
      },
      {
        date: gpsData[4].date,
        time: gpsData[4].time,
        status: gpsData[4].status,
        lat: gpsData[4].lat,
        lon: gpsData[4].lon,
        speed: gpsData[4].speed,
        direction: gpsData[4].direction,
      },
      {
        date: gpsData[5].date,
        time: gpsData[5].time,
        status: gpsData[5].status,
        lat: gpsData[5].lat,
        lon: gpsData[5].lon,
        speed: gpsData[5].speed,
        direction: gpsData[5].direction,
      },
      {
        date: gpsData[6].date,
        time: gpsData[6].time,
        status: gpsData[6].status,
        lat: gpsData[6].lat,
        lon: gpsData[6].lon,
        speed: gpsData[6].speed,
        direction: gpsData[6].direction,
      },
      {
        date: gpsData[7].date,
        time: gpsData[7].time,
        status: gpsData[7].status,
        lat: gpsData[7].lat,
        lon: gpsData[7].lon,
        speed: gpsData[7].speed,
        direction: gpsData[7].direction,
      },
      {
        date: gpsData[8].date,
        time: gpsData[8].time,
        status: gpsData[8].status,
        lat: gpsData[8].lat,
        lon: gpsData[8].lon,
        speed: gpsData[8].speed,
        direction: gpsData[8].direction,
      },
      {
        date: gpsData[9].date,
        time: gpsData[9].time,
        status: gpsData[9].status,
        lat: gpsData[9].lat,
        lon: gpsData[9].lon,
        speed: gpsData[9].speed,
        direction: gpsData[9].direction,
      },
      ],
    },
    headers: {
      'Content-Type': 'application/json',
    },
  };
  client.put(`http://${tla.serverIP}/api/tla/${tla.id}`, gpsUpdate, (response) => {
    test.serverConnection();
    console.log('Server Response OK:');
    console.log(response);
    test.serverResponse();
  });
};

module.exports = update;
