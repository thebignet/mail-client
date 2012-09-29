package mail

import org.joda.time.LocalDate

class Mail {

	String sender
	String subject
	LocalDate date
	Boolean star = false
	Boolean read = false
	String body
	
    static constraints = {
    }
	
	String toString(){
		return "sub <"+subject+"> snd <"+sender+"> dat <"+date+"> str <"+star+">"
	}
}
