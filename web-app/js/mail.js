$(function(){

    _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g,
        evaluate : /\{!(.+?)!\}/g
    };

    // Mail model
    
    window.Mail = Backbone.Model.extend({
	
		// Default attributes for a todo item.
		defaults: function() {
			return {
				id: "",
				sender: "",
				subject: "",
				date: "",
				star: false
			};
		},
		
		toggleStar: function(){
			this.save({star: !this.get("star")});
		}
	
    });
    
    window.MailList = Backbone.Collection.extend({
    	model: Mail,
    	url:'/mail'
    });
    
    window.Mails = new MailList;
    
    window.MailView = Backbone.View.extend({
    	tagName:"tr",
    	template: _.template($('#mail-template').html()),
        // The DOM events specific to an item.
        events: {
            "click .star"      : "toggleStar"
        },
        toggleStar: function() {
          this.model.toggleStar();
        },
    	initialize: function(){
    		this.model.bind('change',this.render, this);
    		this.model.bind('destroy',this.render, this);
    	},
    	render: function(){
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
    	}
    });

    window.AppView = Backbone.View.extend({
    	el: $("#mailapp"),
    	initialize: function(){
    		Mails.bind('add', this.addOne, this);
    		Mails.bind('reset', this.addAll, this);
    		Mails.bind('all', this.render, this);
    		Mails.fetch();
    	},
        events: {
            "click th.selectAll"    : "selectAll",
            "click .refresh"   		: "refresh"
        },
        selectAll: function() {
        	Mails.each(this.select);
        },
        select: function(mail){
        	
        },
    	render: function(){
    		
    	},
    	refresh: function(){
    		$("#mail-list").html("");
    		Mails.reset();
    		Mails.fetch();
    		this.addAll();
    	},
    	addOne: function(mail){
    		var mailView = new MailView({model:mail});
    		$("#mail-list").append(mailView.render().el);
    	},
    	addAll: function(){
    		Mails.each(this.addOne);
    	}
    });
    
    window.App = new AppView;
    
});