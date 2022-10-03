$(document).ready(function () {
    //sets current day and hour
    let currentDay = moment().format("dddd, MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = currentDay;
    let currentHour = moment().format("HH");
  
    // gives button functionality to clear local storage
    $("#clearFieldsBtn").click(function (event) {
      event.preventDefault;
      $("textarea").val("");
      localStorage.clear();
    });
  
    //looks at hour from every time slot and compares it to the actual time
    $(".time-div").each(function () {
      var timeDiv = $(this).attr("id").split("-")[1];
      
      if (currentHour == timeDiv) {
        $(this).addClass("present-hour");
        $(this).children(".description").addClass("white-text");
      } else if (currentHour < timeDiv) {
        $(this).removeClass("present-hour");
        $(this).addClass("future-hour");
      } else if (currentHour > timeDiv) {
        $(this).removeClass("future-hour");
        $(this).addClass("past-hour");
      }
    });
  
    //takes values from time and value divs and saves them to local storage
    $(".saveBtn").click(function (event) {  
      event.preventDefault();
      var value = $(this).siblings(".time-block").val();
      var time = $(this).parent().attr("id").split("-")[1];
      localStorage.setItem(time, value);
    });
  
    //takes items from local storage and displays them in correct slots
    $("#hour-09 .time-block").val(localStorage.getItem("09"));
    $("#hour-10 .time-block").val(localStorage.getItem("10"));
    $("#hour-11 .time-block").val(localStorage.getItem("11"));
    $("#hour-12 .time-block").val(localStorage.getItem("12"));
    $("#hour-13 .time-block").val(localStorage.getItem("13"));
    $("#hour-14 .time-block").val(localStorage.getItem("14"));
    $("#hour-15 .time-block").val(localStorage.getItem("15"));
    $("#hour-16 .time-block").val(localStorage.getItem("16"));
    $("#hour-17 .time-block").val(localStorage.getItem("17"));
  });