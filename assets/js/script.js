//pseudocode 

// time element to display current day
// color cordinate time blocks for past present and future
// save details for each time block in local storage
// saved details stay on page with refresh

var today = moment();
// var saveButton = $('.saveBtn')
// sets current day and time

$("#currentDay").text(today.format("dddd, MMMM Do YYYY, H:mm"));

// create function to change time blocks

// declare variables for current time and the time block time
// create an if statement to compare the two then set a color to the block 

function blockColor() {
  var currentTime = moment().hour();

  $('.time-block').each(function () {
    var time = parseInt($(this).attr('id').match(/(\d+)/))
    console.log(time)
    if (time < currentTime) {
      // set attribute past
      $(this).addClass('past')
    } else if (time === currentTime) {
      // set attribute current
      $(this).removeClass('past')
      $(this).addClass('present')
    } else {
      // set attribut to future
      $(this).removeClass('past')
      $(this).removeClass('present')
      $(this).addClass('future')
    };
  });
};

blockColor();

// function to save details in the time block to local storage
// add event listener on click

$('.saveBtn').on('click', function () {
  var description = $(this).siblings('.description').val()
  var hour = $(this).parent().attr('id')

  localStorage.setItem(hour, description)

  renderTask();
});

// function to get saved task

function renderTask() {
  $('#hour9 .description').val(localStorage.getItem("hour9"))
  $('#hour10 .description').val(localStorage.getItem("hour10"))
  $('#hour11 .description').val(localStorage.getItem("hour11"))
  $('#hour12 .description').val(localStorage.getItem("hour12"))
  $('#hour13 .description').val(localStorage.getItem("hour13"))
  $('#hour14 .description').val(localStorage.getItem("hour14"))
  $('#hour15 .description').val(localStorage.getItem("hour15"))
  $('#hour16 .description').val(localStorage.getItem("hour16"))
  $('#hour17 .description').val(localStorage.getItem("hour17"))
};

renderTask();


