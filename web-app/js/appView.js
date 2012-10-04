(function ( views ) {

	views.AppView = Backbone.View.extend({
    	el: $("#mail-table"),

        events: {
            "click th input.selectAll"    : "selectAll",
            "click .refresh"   		: "refresh"
        },
		initialize : function () {

			var tags = this.collection;

			tags.on('add', this.addOne, this);
			tags.on('reset', this.addAll, this);
			tags.on('all', this.render, this);

			tags.pager();

		},
        selectAll: function() {
        	var input = $("#mail-table th input.selectAll")[0];
			this.collection.each((input.checked)?this.select:this.unselect);
        },
        select: function(mail){
        	mail.toggleCheck(true);
        },
        unselect: function(mail){
        	mail.toggleCheck(false);
        },
    	refresh: function(){
    		$("#mail-list").html("");
    		this.collection.fetch();
			this.collection.each (this.addOne);
    	},
		addAll : function () {
    		$("#mail-list").html("");
			this.collection.each (this.addOne);
		},
		addOne : function ( item ) {
    		var mailView = new views.MailView({model:item});
    		var rendered = mailView.render().el;
    		$("#mail-list").append(rendered);
		},

		render: function(){
		}
	});

})( app.views );
