modules = {
    mail {
        dependsOn 'jquery, underscore, backbone, globalize'
        resource url: '/js/application.js'
		resource url: '/js/mailItem.js'
       	resource url: '/js/paginatedCollection.js'
		resource url: '/js/mailView.js'
   		resource url: '/js/paginatedView.js'
		resource url: '/js/appView.js'
		resource url: '/css/mail.css'
    }
    backbone {
		resource url: '/js/backbone.js'
		resource url: '/js/backbone.paginator.js'
    }
    underscore {
		resource url: '/js/underscore.js'
    }
    globalize {
		resource url: '/js/globalize.js'
    }
}
