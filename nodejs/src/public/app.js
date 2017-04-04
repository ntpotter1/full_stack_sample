// var nodexmlhttp = new XMLHttpRequest()
// nodexmlhttp.onreadystatechange = function () {
//   if (nodexmlhttp.readyState === XMLHttpRequest.DONE) {
//     document.getElementById('node_data').innerHTML = JSON.stringify(JSON.parse(nodexmlhttp.responseText), null, 4)
//   }
// }
// nodexmlhttp.open('GET', 'http://localhost:3000/api/properties/58dd8a74bd2c126614831605', true)
// nodexmlhttp.send()

// var javaxmlhttp = new XMLHttpRequest()
// javaxmlhttp.onreadystatechange = function () {
//   if (javaxmlhttp.readyState === XMLHttpRequest.DONE) {
//     document.getElementById('java_data').innerHTML = JSON.stringify(JSON.parse(javaxmlhttp.responseText), null, 4)
//   }
// }
// javaxmlhttp.open('GET', 'http://localhost:8080/api/properties/58dd8a74bd2c126614831605', true)
// javaxmlhttp.send()

// Make a request to get a property by city
// Example: http://localhost:8080/api/properties?city=San_Francisco
var getProperties = function(city) {
  console.log('city: ', city);
  var apicall = 'http://localhost:8080/api/properties/58dd8a74bd2c126614831605';
  var xml = new XMLHttpRequest();
  xml.onreadystatechange = function() {
    if (xml.readyState === XMLHttpRequest.DONE) {
      var json = JSON.parse(xml.responseText)
      console.log('Example: ', json);
      document.getElementById('name').innerHTML = json.id;
      document.getElementById('info').innerHTML = json.fullAddress;
      document.getElementById('yearBuilt').innerHTML = json.yearBuilt;
    }
  }
  xml.open('GET', encodeURI(apicall /* + city */));
  xml.send();
}