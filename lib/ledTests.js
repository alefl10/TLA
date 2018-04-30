const bs = require('bonescript');
const {
  ledTest,
} = require('../config/config.json');

function turnOff(pin) {
  bs.digitalWrite(pin, 0);
}

const turnOn = (pin, time) => {
  bs.pinMode(pin, bs.OUTPUT);
  bs.digitalWrite(pin, 1);
  setTimeout(turnOff, time, pin);
};

exports.serverConnection = () => {
  console.log(ledTest.serverConnection);
  turnOn(ledTest.serverConnection, 4000);
};

exports.serverResponse = () => {
  turnOn(ledTest.serverResponse, 4000);
};

exports.incomingGPS = () => {
  turnOn(ledTest.incomingGPS, 750);
};
