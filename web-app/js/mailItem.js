(function(models) {
    // Mail model
    models.Mail = Backbone.Model.extend({
		defaults: function() {
			return {
				id: "",
				sender: "",
				subject: "",
				date: "",
				star: false,
				checked: false,
				read: false
			};
		},
		toggleStar: function(){
			this.save({star: !this.get("star")});
		},
		toggleCheck: function(value){
			this.set("checked",value);
		}
    });
    
    // Mail Body model
    models.MailBody = Backbone.Model.extend({
    	urlRoot: 'mail/body',
		defaults: function() {
			return {
				id: "",
				body: ""
			};
		}
    });
    
})(app.models);