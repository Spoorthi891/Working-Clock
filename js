function clock(){
	const fullDate=new Date();
let hours=fullDate.getHours();
let minutes=fullDate.getMinutes();
let seconds=fullDate.getSeconds();
let day=fullDate.getDay();

if(hours<10){
	hours="0"+ hours;
}

if(minutes<10){
	minutes="0"+ minutes;
}

if(seconds<10){
	seconds="0"+ seconds;
}





document.getElementById('hour').innerHTML=hours;
document.getElementById('minute').innerHTML=":"+minutes;
document.getElementById('second').innerHTML=":"+seconds;



}

setInterval(clock,100);

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

document.getElementById('Day').innerHTML=day;

