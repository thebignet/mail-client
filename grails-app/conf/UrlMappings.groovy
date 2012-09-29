class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?"{
			constraints {
				// apply constraints here
			}
		}
		
		"/mail/$id?"(controller: "mail") {
			action = [GET:"list", POST: "save", DELETE: "delete", PUT: "edit"]
		}
		"/mail/body/$id?"(controller: "mail") {
			action = [GET:"body"]
		}
		"/test"(controller: "mail"){
			action = [GET:"test"]
		}

		"/"(view:"/index")
		"/client"(view:"/client")
		"500"(view:'/error')
	}
}
