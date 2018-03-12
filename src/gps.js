const SerialPort = require('serialport');
const config = require('../config/config.json');

const {
  Readline,
} = SerialPort.parsers;
const port = new SerialPort(config.UART, config.options);
const gps = port.pipe(new Readline({ delimiter: '\r\n' }));

console.log('Serial Port active for GPS data communication and string parsing');

module.exports = gps;
