var controllers = require('../controllers');

var routes = [
	{ path: '/', method: 'get', handler: controllers.home.index },
	{ path: '/animals/add', method: 'post', handler: controllers.home.add }
];


function Routes(app) {
	routes.forEach(function(route) {
		app[route.method](route.path, function(req, res, next) {
			console.log('Service this route: ', route.method + ' ' + route.path);
			route.handler(req, res, next);
		});
	});
}

module.exports = Routes;