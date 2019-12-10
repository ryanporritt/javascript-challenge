// event handler for the enter key
$( "#datetime" ).keypress(function( event ) {
    if ( event.which == 13 ) {
      // Cancel the default action, if needed
      event.preventDefault();
  
      // Trigger the button element with a click
      $("#filter-btn").click();
    }
  });