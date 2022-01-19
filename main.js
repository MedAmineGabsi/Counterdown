var newYear = "1 Jan 2023";

function countdown() {
  var newYearDate = new Date(newYear);
  var now = new Date();

  var seconds = (newYearDate - now) / 1000;
  var days = Math.floor(seconds / 3600 / 24);
  var hours = Math.floor((seconds / 3600) % 24);
  var minutes = Math.floor((seconds / 60) % 60);
  var realSeconds = Math.floor(seconds % 60);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("minutes").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(realSeconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
