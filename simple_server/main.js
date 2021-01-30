'use strict'

const http = require('http')
const httpStatus = require('http-status-codes')
const port = 3000

const serverHandler = (req, res) => {
  console.log(`Request received at URL ${req.url}`)

  res.writeHead(httpStatus.OK, {
    'Content-Type': 'text/html'
  })
  
  res.write('<h1>Hello, Universe!</h1>')
  res.end()
}

const server = http.createServer(serverHandler)

server.listen(port)
console.log(`The server has started and is listening on port number: ${port}`)
