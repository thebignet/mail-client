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
				sender: "",
				subject: "",
				date: "",
				star: false
			};
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
    	render: function(){
    	},
    	addOne: function(mail){
    		var view = new MailView({model:mail});
    		$("#mail-list").append(view.render().el);
    	},
    	addAll: function(){
    		Mails.each(this.addOne);
    	}
    });
    
    window.App = new AppView;
    
});