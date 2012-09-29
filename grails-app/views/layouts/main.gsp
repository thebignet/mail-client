<!doctype html>
<html>
	<head>
		<title><g:layoutTitle default="Grails"/></title>
		<r:require modules="bootstrap"/>
		<g:layoutHead/>
		<r:layoutResources />
	</head>
	<body">
		<nav class="navbar navbar-fixed-top">
			<div class="navbar-inner">
				<div class="container-fluid">
					
					<a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</a>
					
					<a class="brand" href="${createLink(uri: '/')}">Mail Client</a>

					<div class="nav-collapse">
						<ul class="nav">
							<li<%= request.forwardURI == "${createLink(uri: '/')}" ? ' class="active"' : '' %>><a href="${createLink(uri: '/')}">Home</a></li>
							<li<%= request.forwardURI == "${createLink(uri: '/client')}" ? ' class="active"' : '' %>><a href="${createLink(uri: '/client')}">Mails</a></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>

		<div class="container-fluid">
			<g:layoutBody/>
			<r:layoutResources />
		</div>
	</body>
</html>
