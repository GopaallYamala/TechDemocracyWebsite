const http = require('http')
const app = require('./backend/app')
const port = process.env.PORT || 39358

app.set(`port`, port)
const server = http.createServer(app)

server.listen(port)
