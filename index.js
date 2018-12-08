'use strict'

const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ host: 'localhost', port: 4000 })

server.bind({
  apiBaseUrl: 'http://localhost:4000/api',
  webBaseUrl: 'http:///localhost:4000'
})

server.register([
  require('dindin-api'),
  require('inert')
], (err) => {

      if (err) {
        throw err
      }

      server.route(require('./routes'))

      server.start(() => {
        console.log('Started server at ', server.info.uri)
      })
})
