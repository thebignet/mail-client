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

        <table class="table table-condensed table-hover">
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

    <!-- Templates -->

    <script type="text/template" id="mail-template">
      <td class="star"><input type="checkbox"> <a href="#"><i
      	{! if (star) { !}
			class="icon-star"
		{! } else { !}
			class="icon-star-empty"
		{! } !}
		></i></a></td>
      <td><strong>{{sender}} ({{id}})</strong></td>
      <td><strong>{{subject}}</strong></td>
      <td><strong>{!print(Globalize.format( new Date(date), "dd/MM/yyyy"));!}</strong></td>
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

  </body>

</html>
