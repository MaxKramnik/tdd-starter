function Animal(props) {
	this.name = props.name;
	this.group = props.group;
}

exports.create = function(props) {
	return new Animal(props);
};