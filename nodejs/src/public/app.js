var getProperties = function(city) {
  console.log('city: ', city);
  var apicall = 'http://localhost:8080/api/properties/58dd8a74bd2c126614831605';
  var xml = new XMLHttpRequest();
  xml.onreadystatechange = function() {
    if (xml.readyState === XMLHttpRequest.DONE) {
      console.log('Example: ', JSON.stringify(JSON.parse(xml.responseText), null, 4));
    }
  }
  xml.open('GET', encodeURI(apicall /* + city */));
  xml.send();
}