exports.Clock = function() {
  this.time = moment().format("h:mm:ss a, MMMM Do YYYY");
  document.getElementById('current_time').innerHTML = this.time;
  setTimeout(exports.Clock, 1000);
  return time;
};

exports.checkAlarm = function(alarm_time) {

    setInterval(function() {
      var time = moment().format("HH:mm");
        if (time === alarm_time) {
          alert ("Wake up!");
        }
    }, 60000);
};



// exports.showTime =  function () {
//   var time = moment().format(" h:mm:ss a, MMMM Do YYYY");
//   document.getElementById('current_time').innerHTML = time;
//   setTimeout(exports.showTime, 1000);
//   return time;
// };


//prototype to check time with alarm time
