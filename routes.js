'use strict'

const Pages = require('./handlers/pages')
const Assets = require('./handlers/assets')

module.exports = [{
  method: 'GET',
  path: '/',
  handler: Pages.home
} , {
  method: 'GET',
  path: '/{params*}',
  handler: Assets.servePublicDirectory
}, {
  method: 'GET',
  path: '/recipes/{id}',
  handler: Pages.viewRecipe
}]
