package mail
import grails.converters.JSON
import org.joda.time.LocalDate

class MailController {

    def index() {
		def mails = Mail.findAll().collect{ [id: it.id, sender: it.sender, subject: it.subject, date: it.date?.localMillis, star: it.star, read: it.read ]}
		render "callback(${mails as JSON})"
	}
	def body(){
		def mail = Mail.read(params.id)
		render( [id: mail.id, body: mail.body] as JSON)
	}
    def save() {
		render([] as JSON)
    }
    
	def delete() {
		render([] as JSON)
	}
	
	def edit() {
		def mail = Mail.get(request.JSON.id)
		bindData(mail, request.JSON, [exclude: ['date']])
		mail.date = new LocalDate(request.JSON.date)
		if(!mail.save(flush:true)){
			mail.errors.each {
				println it
			}
		}
		render(Mail.read(request.JSON.id) as JSON)
	}
	
	def test(){
		render(Mail.findAll() as JSON)
	}
	
	def star(){
		println params
		render([] as JSON)
	}
}
