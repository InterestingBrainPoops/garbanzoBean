const express = require('express')
const app = express()
const routes = require('./routes')
// add socketio import here;
const port = 3000
app.use('/', routes);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
