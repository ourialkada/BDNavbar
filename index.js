import readingTime from "reading-time";
import {HebrewCalendar, HDate, Location, Event} from '@hebcal/core';

window.onload = function(){
    // set the date to show in PST timezone
let date = new Date();
let timezoneOffset = date.getTimezoneOffset();
let pstOffset = -480; // this is the offset for the Pacific Standard Time timezone
let adjustedTime = new Date(date.getTime() + (pstOffset + timezoneOffset) * 60 * 1000);

// display the date and time in PST timezone
let options22 = {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/Los_Angeles'
};
let pstDateTime = adjustedTime.toLocaleString('en-US', options22);
console.log(pstDateTime); // Output: 2/16/2022, 11:01:20 AM
console.log('343')
	  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
 
const today = new Date(pstDateTime)
const today3 = new Date(pstDateTime)

console.log(today); // Output: 2/16/2022, 11:01:20 AM
var endofweek = 7 - today.getDay() - 1

console.log(endofweek)
var time = "";
const nextThreeDays = new Date(today.setDate(today.getDate() + endofweek))
const sunday = new Date(today.setDate(today.getDate() - endofweek-1))

const options = {
		
		isHebrewYear: false,
		candlelighting: true,
		location: Location.lookup('Los Angeles'),
		sedrot: true,
		omer: true,
		start: sunday,
		end: nextThreeDays,
	  };
	  const events = HebrewCalendar.calendar(options);

	  var count = 0;
	  for (const ev of events) {
		const hd = ev.getDate();
		const date = hd.greg();
		console.log(date.toLocaleDateString(), ev.render('en'), hd.toString());

		if(ev.render('en').includes('Parashat'))
		{
			document.getElementById("LeftDate").innerText =today3.toDateString() + " | " + hd.toString()
			document.getElementById("MiddleDate").innerText = ev.render('en')

		}
		if(ev.render('en').includes('Candle'))
		{
			time = ev.render('en');
			
		}
		if(ev.render('en').includes('Havdalah'))
	    {
			document.getElementById("RightDate").innerText = time + " | " + ev.render('en')

				
		}

		
		count ++;
	  }


		
	  

	 
};
