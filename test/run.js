process.env.NODE_ENV = 'test';

var Mocha = require('mocha');
var glob = require("glob");

//move these into config
var timeout = 6000;
var reporter = 'spec';
var ui = 'bdd';

var mocha = new Mocha({ timeout: timeout, reporter: reporter, ui: ui });

function run(callback) {
	glob('test/**/*.test.js', function(err, files) {
		if (err) {
			return callback(err);
		}
		files.forEach(function(file) {
			mocha.addFile(file);
		});

        callback();
	});
}

run(function(err) {
	if (err) {
		throw err;
    }
    mocha.run(function(failures) {
        process.exit(failures);
    });
});