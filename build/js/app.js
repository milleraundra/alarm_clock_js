(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.Clock = function() {
  this.time = moment().format(" h:mm:ss a, MMMM Do YYYY");
  document.getElementById('current_time').innerHTML = this.time;
  setTimeout(exports.Clock, 1000);
  return time;
}

// exports.showTime =  function () {
//   var time = moment().format(" h:mm:ss a, MMMM Do YYYY");
//   document.getElementById('current_time').innerHTML = time;
//   setTimeout(exports.showTime, 1000);
//   return time;
// };

//build clock constructor
//property with increasing time
//prototype to check time with alarm time

},{}],2:[function(require,module,exports){
var Clock = require('./../js/Clock.js').Clock;
var showTime = require('./../js/Clock.js').showTime;

$(document).ready(function() {
  Clock();
  console.log("I'm working!!");


});

},{"./../js/Clock.js":1}]},{},[2]);
