const parseDate = (rawDate) => {
  const day = rawDate.substr(0, 2);
  const month = rawDate.substr(2, 2);
  const year = rawDate.substr(4, 2);
  return `${day}/${month}/${year} (dmy)`;
};

const parseTime = (rawTime) => {
  const hour = rawTime.substr(0, 2);
  const minute = rawTime.substr(2, 2);
  const second = rawTime.substr(4, 2);
  return `${hour}:${minute}:${second} (hms)`;
};

const parseStatus = status => ((status === 'A') ? 'Active GPS' : 'Invalid GPS data');

const parseLatitude = (value, ns) => {
  const lastIndex = value.length - 1;
  const minutes = parseFloat(value.substr(2, lastIndex)) / 60;
  const degrees = parseFloat(value.substr(0, 2)) + minutes;
  const latitude = `${degrees}${ns}`;
  return latitude;
};

const parseLongitude = (value, ew) => {
  const lastIndex = value.length - 1;
  const minutes = parseFloat(value.substr(3, lastIndex)) / 60;
  const degrees = parseFloat(value.substr(0, 3)) + minutes;
  const latitude = `${degrees}${ew}`;
  return latitude;
};

const parseSpeed = knots => `${knots * 1.852} kmh`;

const parser = (data) => {
  const gpsPacket = {};
  gpsPacket.date = parseDate(data[9]);
  gpsPacket.time = parseTime(data[1]);
  gpsPacket.status = parseStatus(data[2]);
  gpsPacket.lat = parseLatitude(data[3], data[4]);
  gpsPacket.lon = parseLongitude(data[5], data[6]);
  gpsPacket.speed = parseSpeed(data[7]);
  [,,,,,,,, gpsPacket.direction] = data; // data[8]
  return gpsPacket;
};

module.exports.parser = parser;
