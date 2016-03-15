// var moment = require('./../bower_components/moment/moment.js');

$(document).ready(function() {
  $('#current_time').text(moment().format(" h:mm:ss a, MMMM Do YYYY"));
  console.log("I'm working!!!!");
});
