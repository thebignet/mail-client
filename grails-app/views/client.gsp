<!DOCTYPE html>
<html>

  <head>
    <title>Mail client</title>
    <r:require module="mail" />
    <r:require modules="bootstrap"/>
    <meta name="layout" content="main">
  </head>

  <body>

    <!-- Todo App Interface -->

    <div id="mailapp">

      <div class="title">
        <h1>Mail client</h1>
      </div>

      <div class="content">

		<div class="row">
			<div class="span12">
		        <table class="table table-condensed table-hover" id="mail-table">
				  <thead>
				    <tr>
				      <th class="span1"><input type="checkbox" class="selectAll"><i class="icon-refresh refresh"></i></th>
				      <th class="span2"></th>
				      <th class="span9"></th>
				      <th class="span2"></th>
				    </tr>
				  </thead>
				  <tbody id="mail-list">
				  </tbody>
				</table>
			</div>
		</div>
		<div class="row">
			<div class="span12" id="mail-body">
			</div>
		</div>

      </div>

    </div>

    <!-- Templates -->

    <script type="text/template" id="mail-template">
      <td class="star"><input type="checkbox"{! if(checked){ !}checked{! } !}> <a href="#"><i
      	{! if (star) { !}
			class="icon-star"
		{! } else { !}
			class="icon-star-empty"
		{! } !}
		></i></a></td>
      <td><strong>{{sender}} ({{id}})</strong></td>
      <td class="subject"><strong>{{subject}}</strong></td>
      <td><strong>{!print(Globalize.format( new Date(date), "dd/MM/yyyy"));!}</strong></td>
    </script>

    <script type="text/template" id="mail-body-template">
      {{body}}
    </script>

    <script type="text/template" id="stats-template">
      {! if (total) { !}
        <span class="todo-count">
          <span class="number">{{ remaining }}</span>
          <span class="word">{{ remaining == 1 ? 'item' : 'items' }}</span> left.
        </span>
      {! } !}
      {! if (done) { !}
        <span class="todo-clear">
          <a href="#">
            Clear <span class="number-done">{{ done }}</span>
            completed <span class="word-done">{{ done == 1 ? 'item' : 'items' }}</span>
          </a>
        </span>
      {! } !}
    </script>

		<!-- sample template for pagination UI -->
		<script type="text/html" id="tmpServerPagination">
			<div class="breadcrumb">

			  	<span class="cell">
					<% for(p=0;p<=totalPages;p++){
					%>
						<% if (currentPage == p) { %>
							<span class="page selected"><%= p %></span>
						<% } else { %>
							<a href="#" class="page"><%= p %></a>
						<% } %>	
					<%	
					}%>

					<span class="divider">/</span>

					<% if (currentPage > firstPage) { %>
						<a href="#" class="serverprevious">Previous</a>
					<% }else{ %>
						<span>Previous</span>
					<% }%>

					<% if (currentPage < totalPages) { %>
						<a href="#" class="servernext">Next</a>
					<% } %>

					<% if (firstPage != currentPage) { %>
						<a href="#" class="serverfirst">First</a>
					<% } %>

					<% if (lastPage != currentPage) { %>
						<a href="#" class="serverlast">Last</a>
					<% } %>


					<span class="divider">/</span>

					<span class="cell serverhowmany">
						Show
						<a href="#" class="selected">3</a>
						|
						<a href="#" class="">9</a>
						|
						<a href="#" class="">12</a>
						per page
					</span>

					
					<span class="divider">/</span>
					<span class="cell first records">
						Page: <span class="current"><%= currentPage %></span>
						of
						<span class="total"><%= totalPages %></span>
									shown
					</span>

			<span class="divider">/</span>

				<span class="cell sort">
					<a href="#" class="orderUpdate btn small">Sort by:</a>
				</span>

				<select id="sortByField">
					<option value="cid">Select a field to sort on</option>
				 	<option value="ReleaseYear">Release year</option>
				 	<option value="ShortName">Alphabetical</option>
				</select>
			  	</span>


			  </div>
		  </script>
  </body>

</html>
