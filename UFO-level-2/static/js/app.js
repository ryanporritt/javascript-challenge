// Filter data on date:
var ufo = data;
var button = d3.select("#filter-btn");

// Select the input element and get the value property of the input element
var desiredDate = "";
var desiredCity = "";
var desiredState = "";
var desiredCountry = "";
var desiredShape = "";

Init()

button.on("click", function() {
  desiredDate = d3.select("#datetime").property("value");
  console.log(desiredDate);
  desiredCity = d3.select("#city").property("value");
  console.log(desiredCity);
  desiredState = d3.select("#state").property("value");
  console.log(desiredState);
  desiredCountry = d3.select("#country").property("value");
  console.log(desiredCountry);
  desiredShape = d3.select("#shape").property("value");
  console.log(desiredShape);

  //filter data
  var filteredData = ufo;
  filteredData = filterOutDate(filteredData);
  filteredData = filterOutCity(filteredData);
  filteredData = filterOutState(filteredData);
  filteredData = filterOutCountry(filteredData);
  filteredData = filterOutShape(filteredData);

  //clear the current tbody contents
  $("#tbodyid").empty();

  //assgin a value to the tbody element
  var tbody = d3.select("tbody");

  // Create a table by appending to the tbody element
  filteredData.forEach((element) => {
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
function Init()
{
  var tbody = d3.select("tbody");

  // Create a table by appending to the tbody element
  ufo.forEach((element) => {
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

//filter data functions

//filter on date
function filterOutDate(element) {
  var filteredDateData = element.filter(ufoData => ufoData.datetime === desiredDate);
  console.log(filteredDateData);
  
  if (filteredDateData.length > 0) {
    console.log("dateFunctionData");
    console.log(filteredDateData);
    return filteredDateData;
  }

  else {
    console.log("preFunctionData")
    return element;
  }
};

//filter on city
function filterOutCity(element) {
  var filteredCityData = element.filter(ufoData => ufoData.city === desiredCity);
  console.log(filteredCityData);
  
  if (filteredCityData.length > 0) {
    console.log("cityFunctionData");
    console.log(filteredCityData);
    return filteredCityData;
  }

  else {
    console.log("preFunctionData")
    return element;
  }
};

//filter on state
function filterOutState(element) {
  var filteredStateData = element.filter(ufoData => ufoData.state === desiredState);
  console.log(filteredStateData);
  
  if (filteredStateData.length > 0) {
    console.log("stateFunctionData");
    console.log(filteredStateData);
    return filteredStateData;
  }

  else {
    console.log("preFunctionData")
    return element;
  }
};

//filter on country
function filterOutCountry(element) {
  var filteredCountryData = element.filter(ufoData => ufoData.country === desiredCountry);
  console.log(filteredCountryData);
  
  if (filteredCountryData.length > 0) {
    console.log("countryFunctionData");
    console.log(filteredCountryData);
    return filteredCountryData;
  }

  else {
    console.log("preFunctionData")
    return element;
  }
};

//filter on shape
function filterOutShape(element) {
  var filteredShapeData = element.filter(ufoData => ufoData.shape === desiredShape); 
  console.log(filteredShapeData);
  
  if (filteredShapeData.length > 0) {
    console.log("shapeFunctionData");
    console.log(filteredShapeData);
    return filteredShapeData;
  }

  else {
    console.log("preFunctionData")
    return element;
  }
};

//Enter event handler


//handle datetime
$( "#datetime" ).keypress(function( event ) {
  if ( event.which == 13 ) {
  // Cancel the default action, if needed
  event.preventDefault();

  // Trigger the button element with a click
  $("#filter-btn").click();
  }
});

//handle city
$( "#city" ).keypress(function( event ) {
  if ( event.which == 13 ) {
  // Cancel the default action, if needed
  event.preventDefault();

  // Trigger the button element with a click
  $("#filter-btn").click();
  }
});

//handle state
$( "#state" ).keypress(function( event ) {
  if ( event.which == 13 ) {
  // Cancel the default action, if needed
  event.preventDefault();

  // Trigger the button element with a click
  $("#filter-btn").click();
  }
});

//handle country
$( "#country" ).keypress(function( event ) {
  if ( event.which == 13 ) {
  // Cancel the default action, if needed
  event.preventDefault();

  // Trigger the button element with a click
  $("#filter-btn").click();
  }
});

//handle shape
$( "#shape" ).keypress(function( event ) {
  if ( event.which == 13 ) {
  // Cancel the default action, if needed
  event.preventDefault();

  // Trigger the button element with a click
  $("#filter-btn").click();
  }
});
