package mail

import org.joda.time.LocalDate

class Mail {

	String sender
	String subject
	LocalDate date
	Boolean star = false
	
    static constraints = {
    }
}
