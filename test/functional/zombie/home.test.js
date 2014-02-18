process.env.NODE_ENV = 'test';
var http = require('http');
var app = require('../../../app');
var should = require('should');
var Browser = require('zombie');

var server;

describe('ZOMBIE FUNCTIONAL TEST', function() {

	before(function() {
		server = http.createServer(app).listen(3000);
		this.browser = new Browser({ site: 'http://localhost:3000' });
	});

	beforeEach(function(done) {
		this.browser.visit('/', done);
	});

	it ('- should show animals', function() {
		should(this.browser.success).be.equal(true);
		should(this.browser.text('h1')).equal('Animals:');
		should(this.browser.queryAll('#animals li')).have.lengthOf(3);
	});


	it('should add a new animal', function(done) {
		var browser = this.browser;
		browser.fill('new-animal-name', 'Horse');
		browser.fill('new-animal-group', 'mamal');
		browser.pressButton('Add New Animal').then(function() {
			should(browser.queryAll('#animals li')).have.lengthOf(4);
			should(browser.text('#animals li:last-child')).equal('Horse -- mamal');
		}).then(done, done);
	});


	after(function(done) {
		server.close(done);
	});

});