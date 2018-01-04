function get_time_left() {
 
  var today = new Date().getTime(); //today's date
  var launch_date = new Date("March 20 2018").getTime();
  var _seconds = 1000;
  var _minutes = _seconds * 60;
  var _hours = _minutes * 60;
  var _days = _hours * 24;
 
  var days_left = Math.floor((launch_date - today)/_days);
  var hours_left = Math.floor(((launch_date - today)%_days)/_hours);
  var minutes_left = Math.floor((((launch_date - today)%_days)%_hours)/_minutes);
  var seconds_left = Math.floor(((((launch_date - today)%_days)%_hours)%_minutes)/_seconds);
  
  var date_object = {days: days_left, hours: hours_left, minutes: minutes_left, seconds: seconds_left};
  return date_object;
}

window.setInterval(function(){
  var time_left = get_time_left();
  $("#days").html(time_left['days']);
  $("#hours").html(time_left['hours']);
  $("#minutes").html(time_left['minutes']);
  $("#seconds").html(time_left['seconds']);
}, 500);