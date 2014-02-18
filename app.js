var express = require('express');
var swig = require('swig');
var http = require('http');
var path = require('path');
var	config = require('./config/config');
var routes = require('./app/routes');

var app = express();

app.engine('html', swig.renderFile);
app.set('views', app.root);
app.set('view engine', 'html');
app.set('view options', { layout: false });

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'app/views'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'app/assets')));

routes(app);

//a little work around to generate zombie tests
module.exports = app;

/* istanbul ignore if  */
if (!module.parent) {
	http.createServer(app).listen(app.get('port'), function(){
		console.log('Express server listening on port ' + app.get('port'));
	});
}