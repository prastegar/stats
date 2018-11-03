const routes = require('next-routes')

module.exports = routes()
		.add('about','/about','about')
		.add('template', '/template/:id', 'template')