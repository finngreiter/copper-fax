const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const port = 3000 || process.env.PORT

app.use('/', express.static(__dirname + '/public'))



http.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

