//Top-level namespaces for our code

(function(){

    _.templateSettings = {
            interpolate : /\{\{(.+?)\}\}/g,
            evaluate : /\{!(.+?)!\}/g
        };

	window.app = {};
	app.collections = {};
	app.models = {};
	app.views = {};
	app.mixins = {};

	// Defer initialization until doc ready.
	$(function(){
			app.collections.paginatedItems = new app.collections.PaginatedCollection();
			app.views.app = new app.views.AppView({collection: app.collections.paginatedItems});
			app.views.pagination = new app.views.PaginatedView({collection:app.collections.paginatedItems});
	});

})();


if (typeof jQuery !== 'undefined') {
	(function($) {
		$('#spinner').ajaxStart(function() {
			$(this).fadeIn();
		}).ajaxStop(function() {
			$(this).fadeOut();
		});
	})(jQuery);
}
