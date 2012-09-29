import mail.Mail
import org.joda.time.LocalDate

class BootStrap {

    def init = { servletContext ->
		Mail.all.each {
			it.delete()
		}
		def firstMail = new Mail(sender:'Jed',subject:'Subject',date:new LocalDate(2012,9,5),star:true,body:"Dear John, how do you do ?")
		if(!firstMail.save(flush:true)){
			log.error 'Aie ouille'
		}
		def secondMail = new Mail(sender:'Alice',subject:'Another subject',date:new LocalDate(2012,9,15),body:"Did you see the new iPhone5 ?")
		if(!secondMail.save(flush:true)){
			log.error 'Aie ouille'
		}
		def thirdMail = new Mail(sender:'Bob',subject:'Hi there',date:new LocalDate(2012,9,15),body:"Just to say hello")
		if(!thirdMail.save(flush:true)){
			log.error 'Aie ouille'
		}
		thirdMail.star=true
		if(!thirdMail.save(flush:true)){
			log.error 'Aie ouille'
		}

    }
    def destroy = {
    }
}
