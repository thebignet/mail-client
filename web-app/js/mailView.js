(function ( views, bodyModel ) {

	views.MailBodyView = Backbone.View.extend({
    	el: $("#mail-body"),
    	template: _.template($('#mail-body-template').html()),
        events: {
        },
    	initialize: function(){
    		this.model.bind('change',this.render, this);
    		this.model.bind('destroy',this.render, this);
    	},
    	render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
    	}
    });
	
	var currentMailBody = null;

    views.MailView = Backbone.View.extend({
    	tagName:"tr",
    	template: _.template($('#mail-template').html()),
        events: {
            "click td.star"       : "toggleStar",
            "click td:not(.star)" : "showBody"
        },
        toggleStar: function() {
            this.model.toggleStar();
        },
        showBody: function() {
        	if(currentMailBody==null || currentMailBody.get("id") != this.model.get("id")){
        		currentMailBody = new bodyModel({id:this.model.get("id")});
        		currentMailBody.fetch();
        		new views.MailBodyView({model:currentMailBody});
        		this.$el.siblings().removeClass('info');
        		this.$el.addClass('info');
        	}
        },
    	initialize: function(){
    		this.model.bind('change',this.render, this);
    		this.model.bind('destroy',this.render, this);
    	},
    	render: function(){
    		this.$el.html(this.template(this.model.toJSON()));
    		return this;
    	}
    });
    
})( app.views, app.models.MailBody );
