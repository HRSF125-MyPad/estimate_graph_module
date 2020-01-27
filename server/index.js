const express = require('express')
let app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(__dirname + '/../client/dist'))

// app.post('/')

// app.get('/')

let port = 3000

app.listen(port, function () {
  console.log(`Ay dawg, listening on port ${port}`)
})
