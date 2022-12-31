$(document).ready(function () {
    //sets current day and hour
    let currentDay = moment().format("dddd, MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = currentDay;
    let currentHour = moment().format("HH");
  
  });