var should = require('should');
var animal = require('../../../lib/models/animal');

describe("UNIT TEST: MODEL: Animal", function() {
	describe("create()", function() {
		it ("- should return an animal object with assigned properties", function(done) {
			var cat = animal.create({ name: 'Kitty', group: 'mamal' });
			should(cat).have.property('name', 'Kitty');
			should(cat).have.property('group', 'mamal');
			done();
		});
	});
});

