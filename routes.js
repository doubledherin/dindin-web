'use strict'

const Pages = require('./handlers/pages')
const Assets = require('./handlers/assets')

module.exports = [{
  method: 'GET',
  path: '/{params*}',
  handler: Assets.servePublicDirectory
}]
