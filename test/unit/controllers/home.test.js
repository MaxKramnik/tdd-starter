var should = require('should');
var homeController = require('../../../app/controllers/home');

describe('UNIT TEST: CONTROLLERS: home', function() {
	describe('index', function() {
        var requestStub = {};
        var responseStub = {
            view: "",
            data: {},
            render: function(view, data) {
                this.view = view;
                this.data = data;
            }
        };

		it ('- should use index view', function(done) {
			homeController.index(requestStub, responseStub);
            should(responseStub.view).equal('home/index');
            should(responseStub.data.animals).be.instanceof(Array);
			should(responseStub.data.animals[0].constructor.name).be.equal('Animal');
			done();
		});
	});
    describe('add', function() {
        var addRequestStub = {};
        var addResponseStub = {
            data: {},
            json: function(data) {
                this.data = data;
            }
        };
        it ('- should add a new animal and return it', function(done) {
            addRequestStub.body = {};
            addRequestStub.body['new-animal-name'] = 'Dog';
            addRequestStub.body['new-animal-group'] = 'mamal';
            homeController.add(addRequestStub, addResponseStub);
            should(addResponseStub.data.animal.constructor.name).be.equal('Animal');
            done();
        });
    });
});
