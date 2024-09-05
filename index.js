import readingTime from "reading-time";
import {HebrewCalendar, HDate, Location, Event} from '@hebcal/core';

window.onload = function(){
    

const today = new Date(); 
var endofweek = 7 - today.getDay() - 1

console.log(endofweek)
var time = "";
const nextThreeDays = new Date(today. setDate(today.getDate() + endofweek))
const sunday = new Date(today. setDate(today.getDate() - endofweek-1))

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
			document.getElementById("LeftDate").innerText =today.toDateString() + " | " + hd.toString()
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
