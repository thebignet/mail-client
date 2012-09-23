package mail
import grails.converters.JSON

class MailController {

    def index() {
         render( Mail.findAll().collect{ [sender: it.sender, subject: it.subject, date: it.date?.localMillis, star: it.star ]} as JSON )
	}
    def save() {
		render({} as JSON)
    }
    
	def delete() {
		render({} as JSON)
	}
	
	def edit() {
		render({} as JSON)
	}
	
	def star(){
		println params
		render({} as JSON)
	}
}
