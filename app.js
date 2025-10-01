const express = require('express')
require('dotenv').config()

const app = express()

// get the port from env variable
const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})

