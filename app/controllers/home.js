var animal = require('../../lib/models/animal');
var home = {};
var animals = [];

animals.push(animal.create({ name: 'Grasshoper', group: 'insect' }));
animals.push(animal.create({ name: 'Cow', group: 'mamal' }));
animals.push(animal.create({ name: 'Dolphin', group: 'mamal' }));


home.index = function(req, res, next) {
	res.render('home/index', { animals: animals });
};

home.add = function(req, res, next) {
	var animalName = req.body['new-animal-name'];
	var animalGroup = req.body['new-animal-group'];
	var newAnimal = animal.create({ name: animalName, group: animalGroup });
	animals.push(newAnimal);
	res.json({ animal: newAnimal });
};

module.exports = home;