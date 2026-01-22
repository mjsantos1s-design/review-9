"use strict"
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Michael Santos
   Date:   

*/
showClock();
setInterval("showClock()", 1000)
function showClock() {
   var thisDay = new Date();
   var localDate = thisday.toLocaleDateString();
   var localTime = thisDay.toLocaleTimeString();
   var j4Date = nextJuly4(thisDay);
   j4Date = setHours(21);
   var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
   var secsLeft = (minsLeft - Math.floor(minsLeft))*60;
   document.getElementById("days").textContent = Math.floor(daysLeft);
   document.getElementById("hrs").textContent = Math.floor(hrsLeft);
   document.getElementById("mins").textContent = Math.floor(minsLeft);
   document.getElementById("secs").textContent = Math.floor(secsLeft);
   document.getElementById("dateNow").innerHTML =
   localDate + "<br />" + localTime;
}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}


