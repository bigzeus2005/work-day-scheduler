//pseudocode 

// time element to display current day
// color cordinate time blocks for past present and future
// save details for each time block in local storage
// saved details stay on page with refresh

var today = moment();

// sets current day and time

$("#currentDay").text(today.format("dddd, MMMM Do YYYY, H:mm"));

// create function to change time blocks

// declare variables for current time and the time block time
// create an if statement to compare the two then set a color to the block 
// possibly need a for loop?

function blockColor() {
  var currentTime = moment().hour();
  var time = 
  
  if (time < currentTime) {
    // set attribute past
    $('#time-block').addClass('#past')
  } else if (time === currentTime) {
    // set attribute current
    $('#time-block').addClass('#present')
  } else {
    // set attribut to future
    $('#time-block').addClass('#future')
  };
};

// function to save details in the time block to local storage


