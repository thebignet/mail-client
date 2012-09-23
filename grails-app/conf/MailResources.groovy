modules = {
    mail {
        dependsOn 'jquery, underscore, backbone, globalize'
		resource url: '/js/mail.js'
		resource url: '/css/mail.css'
    }
    backbone {
		resource url: '/js/backbone.js'
    }
    underscore {
		resource url: '/js/underscore.js'
    }
    globalize {
		resource url: '/js/globalize.js'
    }
}
