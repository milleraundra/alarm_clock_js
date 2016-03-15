exports.Clock = function() {
  this.time = moment().format(" h:mm:ss a, MMMM Do YYYY");
}

exports.showTime =  function () {
  var time = moment().format(" h:mm:ss a, MMMM Do YYYY");
  document.getElementById('current_time').innerHTML = time;
  setTimeout(exports.showTime, 1000);
  return time;
};

//build clock constructor
//property with increasing time
//prototype to check time with alarm time
