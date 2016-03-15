var checkAlarm = require('./../js/Clock.js').checkAlarm;

$(document).ready(function() {
  $("#set_alarm").submit(function(event) {
    event.preventDefault();
    var alarm_time = $('input#time').val();
    console.log(alarm_time);
    //pass alarm_time into a Function (compare time)
    checkAlarm(alarm_time);
    //show set alarms on page
  });
});
