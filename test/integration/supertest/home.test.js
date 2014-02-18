var http = require('http');
var app = require('../../../app');
var supertest = require('supertest');
var testUrl = 'http://localhost:3000';
var server = supertest(testUrl);

var webServer;

describe("SUPERTEST INTEGRATION TEST", function() {

	before(function() {
		webServer = http.createServer(app).listen(3000);
	});
	
	describe("path: / ", function() {
		it ("- should be a valid page", function(done) {
			server
				.get('/')
				.expect(200, done);
		});
	});

	describe("path: /animals/add ", function() {
		it ("- should be a valid post end point", function(done) {
			server
				.post('/animals/add')
				.expect(200, done);
		});
	});

	after(function(done) {
		webServer.close(done);
	});
});

