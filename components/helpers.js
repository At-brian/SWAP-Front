function getDistance(lat1, lon1, lat2, lon2) {
  var R = 3963; // Radius of the earth in miles
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in miles
  return d * 1.609344;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// console.log(getDistance(41.928, -87.7044, 42.8807, -88.2014));

export default getDistance;
