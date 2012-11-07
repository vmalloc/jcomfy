# jcomfy

A small jquery plugin to respond to the Comfy keyboard keys:

        <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
          <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
          <script type="text/javascript" src="js/jcomfy.js"></script>
          <body>
        
          </body>
          <script type="text/javascript">
          $(function() {
            // bind to any comfy key
            $("body").comfy(function(evt) {
              $(this).text(evt.comfy_key);
            });

	    // bind to a specific key
            $("body").comfy("moon", function(evt) {
	       $(this).text("moon pressed!")
	    });
          });
        
          </script>
        </html>
        