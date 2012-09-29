$(function(){

    _.templateSettings = {
        interpolate : /\{\{(.+?)\}\}/g,
        evaluate : /\{!(.+?)!\}/g
    };

    // Mail model
    
    window.Mail = Backbone.Model.extend({
		defaults: function() {
			return {
				id: "",
				sender: "",
				subject: "",
				date: "",
				star: false,
				read: false
			};
		},
		toggleStar: function(){
			this.save({star: !this.get("star")});
		}
	
    });
    
    window.MailBody = Backbone.Model.extend({
    	urlRoot: 'mail/body',
		defaults: function() {
			return {
				id: "",
				body: ""
			};
		},
		
    });
    
    window.MailList = Backbone.Collection.extend({
    	model: Mail,
    	url:'/mail'
    });
    
    window.Mails = new MailList;
    
    window.MailBodyView = Backbone.View.extend({
    	el: $("#mail-body"),
    	template: _.template($('#mail-body-template').html()),
        events: {
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

    window.CurrentMailBody = null;
    
    window.MailView = Backbone.View.extend({
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
        	if(CurrentMailBody==null || CurrentMailBody.get("id") != this.model.get("id")){
        		CurrentMailBody = new MailBody({id:this.model.get("id")});
        		CurrentMailBody.fetch();
        		new MailBodyView({model:CurrentMailBody});
        		this.$el.siblings().removeClass('info');
        		this.$el.addClass('info');
        	}
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