(function (collections, model, paginator) {

	// Create a new collection using one of Backbone.Paginator's
	// pagers. We're going to begin using the requestPager first.

	collections.PaginatedCollection = paginator.requestPager.extend({

		// As usual, let's specify the model to be used
		// with this collection
		model: model,

		// We're going to map the parameters supported by
		// your API or backend data service back to attributes
		// that are internally used by Backbone.Paginator. 

		// e.g the NetFlix API refers to it's parameter for 
		// stating how many results to skip ahead by as $skip
		// and it's number of items to return per page as $top

		// We simply map these to the relevant Paginator equivalents

		// Note that you can define support for new custom attributes
		// adding them with any name you want

		paginator_core: {
			// the type of the request (GET by default)
			type: 'GET',
			
			// the type of reply (jsonp by default)
			dataType: 'jsonp',
		
			// the URL (or base URL) for the service
            url:'/mail'
		},
		
		paginator_ui: {
			// the lowest page index your API allows to be accessed
			firstPage: 0,
		
			// which page should the paginator start from 
			// (also, the actual page the paginator is on)
			currentPage: 0,
			
			// how many items per page should be shown
			perPage: 3,
			
			// a default number of total pages to query in case the API or 
			// service you are using does not support providing the total 
			// number of pages for us.
			// 10 as a default in case your service doesn't return the total
			totalPages: 10
		},
		
		server_api: {
			// the query field in the request
			'filter': '',
			
			// number of items to return per request/page
			'top': function() { return this.perPage },
			
			// how many results the request should skip ahead to
			// customize as needed. For the Netflix API, skipping ahead based on
			// page * number of results per page was necessary.
			'skip': function() { return this.currentPage * this.perPage },
			
			// field to sort by
			'orderby': function() {
				if(this.sortField === undefined)
					return 'ReleaseYear';
				return this.sortField;
			},

			
			// what format would you like to request results in?
			'format': 'json',
			
			// custom parameters
			'inlinecount': 'allpages',
			'callback': 'callback'                                     
		},

		parse: function (response) {
			return response;
		}

	});

})( app.collections, app.models.Mail, Backbone.Paginator);
