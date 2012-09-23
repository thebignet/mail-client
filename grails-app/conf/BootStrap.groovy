import mail.Mail
import org.joda.time.LocalDate

class BootStrap {

    def init = { servletContext ->
		Mail.all.each {
			it.delete()
		}
		def firstMail = new Mail(sender:'Jean',subject:'Subject',date:new LocalDate(2012,9,5),star:true)
		if(!firstMail.save(flush:true)){
			log.error 'Aie ouille'
		}
		def secondMail = new Mail(sender:'Jean l\'autre',subject:'Encore un sujet',date:new LocalDate(2012,9,15))
		if(!secondMail.save(flush:true)){
			log.error 'Aie ouille'
		}
    }
    def destroy = {
    }
}
