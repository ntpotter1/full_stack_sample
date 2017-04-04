var express = require('express')
var http = require('http')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

mongoose.connect(process.env.MONGODB)
mongoose.connection.on('error', (err) => {
  console.error(err)
  setTimeout(() => mongoose.connect(process.env.MONGODB), 5000)
})

var Properties = mongoose.model('properties', mongoose.Schema({
  full_address: 'String',
  year_built: 'Number'
}))

var app = express()

app.use('/public', express.static(process.cwd() + '/src/public'))
app.use(bodyParser.json())

app.get('/api/properties/:id', function (req, res) {
  Properties.findOne({ _id: req.params.id }, function (err, property) {
    if (err) return res.status(500).json(err)
    if (property) return res.json(property.toObject())
    return res.status(404).json({ status: 'NOT_FOUND' })
  })
})

app.get('/', function (req, res) {
  res.send(`
    <html>
      <head>
        <link href="/public/styles.css" rel="stylesheet"/>
        <script src="/public/app.js"></script>
      </head>
      <body>
      <form name="query" action="" method="GET">
        <label for="query"> Search: </label>
        <input type="text" name="query">
        <input type="button" name="search" Value="Search" onClick="getProperties(this.form.inputbox.value)">
        </form>
      </body>
    </html>
  `)
})

http.createServer(app).listen(3000)
