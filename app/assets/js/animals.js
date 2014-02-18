(function($){
	var $list = $('#animals');
	$('#new-animal').submit(function(e) {
		e.preventDefault();
		$.ajax({
			url: '/animals/add',
			type: 'POST',
			data: $(this).serialize()
		}).done(function(data) {
			$list.append('<li>' + data.animal.name + ' -- ' + data.animal.group + '</li>');
		});
	});
})(jQuery);