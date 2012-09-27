package mail
import grails.converters.JSON

class MailController {

    def index() {
		render( Mail.findAll().collect{ [id: it.id, sender: it.sender, subject: it.subject, date: it.date?.localMillis, star: it.star ]} as JSON )
	}
    def save() {
		render([] as JSON)
    }
    
	def delete() {
		render([] as JSON)
	}
	
	def edit() {
		Mail mail = Mail.get(params.id)
		println request.JSON
		println "Mail before params : "+mail.subject+" with star "+mail.star
		mail.properties = request.JSON
		println "Mail after params : "+mail.subject+" with star "+mail.star
		if(!mail.save(flush:true)){
			println "bwaaah"
			println mail.errors
		}
		render([] as JSON)
	}
	
	def star(){
		println params
		render([] as JSON)
	}
}
