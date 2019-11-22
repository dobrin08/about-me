;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		// Stick in parrent
		var offset = 60;

		$("#card-contacts").stick_in_parent({
			offset_top: offset
		});

		// Init data toggle bootstrap tooltip
		$('[data-toggle="tooltip"]').tooltip()
	});
})(jQuery, window, document);