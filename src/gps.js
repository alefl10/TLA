const SerialPort = require('serialport');

const {
  Readline,
} = SerialPort.parsers;
const UART = '/dev/ttyO1';
const options = {
  baudRate: 9600,
};
const port = new SerialPort(UART, options);
const gps = port.pipe(new Readline({ delimiter: '\r\n' }));

console.log('Serial Port active for GPS data communication and string parsing');

module.exports = gps;
