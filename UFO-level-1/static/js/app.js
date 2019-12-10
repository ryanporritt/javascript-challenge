// Filter data on date:
var ufo = data;
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the Date input element
  var inputDateElement = d3.select("#datetime");

  // Get the value property of the Date input element
  var desiredDate = inputDateElement.property("value");
  console.log(desiredDate);

  //filter data on Date = true
  var filteredData = ufo.filter(ufoDate => ufoDate.datetime === desiredDate);

  //this is the filtered data
  console.log(filteredData);

  //clear the current tbody contents
  $("#tbodyid").empty();

  //assgin a value to the tbody element
  var tbody = d3.select("tbody");

  // Create a table by appending to the tbody element
  //filtered data
  filteredData.forEach((element) => {
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


  // //unfiltered data
  // data.forEach((element) => {
  //   var row = tbody.append("tr");
  //   Object.entries(element).forEach(([key, value]) => {
  //     var cell = row.append("td");
  //     cell.text(value);
  //   });
  // });
});




// event handler for the enter key
$( "#datetime" ).keypress(function( event ) {
  if ( event.which == 13 ) {
    // Cancel the default action, if needed
    event.preventDefault();

    // Trigger the button element with a click
    $("#filter-btn").click();
  };
});
