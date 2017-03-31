var nodexmlhttp = new XMLHttpRequest()
nodexmlhttp.onreadystatechange = function () {
  if (nodexmlhttp.readyState === XMLHttpRequest.DONE) {
    document.getElementById('node_data').innerHTML = JSON.stringify(JSON.parse(nodexmlhttp.responseText), null, 4)
  }
}
nodexmlhttp.open('GET', 'http://localhost:3000/api/properties/58dd8a74bd2c126614831605', true)
nodexmlhttp.send()

var javaxmlhttp = new XMLHttpRequest()
javaxmlhttp.onreadystatechange = function () {
  if (javaxmlhttp.readyState === XMLHttpRequest.DONE) {
    document.getElementById('java_data').innerHTML = JSON.stringify(JSON.parse(javaxmlhttp.responseText), null, 4)
  }
}
javaxmlhttp.open('GET', 'http://localhost:8080/api/properties/58dd8a74bd2c126614831605', true)
javaxmlhttp.send()
