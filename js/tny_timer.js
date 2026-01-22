"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Michael Santos
   Date:   

*/

function showClock() {
   var thisDay = Date("May 19, 2018 9:31:27 a.m.");
   var localDate = thisday.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   var j4Date = nextJuly4(thisDay);
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
   j4Date = setHours(21);
}

/*Still needs to be edited for number 5f*/
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = Math.floor(secsLeft);
