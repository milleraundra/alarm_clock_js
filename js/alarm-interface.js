var checkAlarm = require('./../js/Clock.js').checkAlarm;

$(document).ready(function() {
  $("#set_alarm").submit(function(event) {
    event.preventDefault();
    var alarm_time = $('input#time').val();
    //show set alarms on page
    $("#alarms").append("<li> Alarm set for: " + alarm_time + "</li>");
    console.log(alarm_time);
    checkAlarm(alarm_time);

  });
});
