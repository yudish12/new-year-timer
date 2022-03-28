const newYear = "1 jan 2023";

const daysel = document.getElementById("days");
const hoursel = document.getElementById("hours");
const minsel = document.getElementById("mins");
const secondsel = document.getElementById("seconds");

function countdown(){
const newYearDate = new Date(newYear);
const currentDate = new Date();
const diff = (newYearDate-currentDate);
const totalSeconds  = Math.floor(diff/1000);
const days = Math.floor(totalSeconds/3600 / 24);
const hours = Math.floor(totalSeconds/3600) % 24;
const mins = Math.floor(totalSeconds/60) % 60;
const seconds = Math.floor(totalSeconds) % 60;
console.log(days,hours,mins,seconds);
daysel.innerHTML=days+"days";
hoursel.innerHTML=hours+"hours";
minsel.innerHTML=mins+"mins";
secondsel.innerHTML=seconds+"seconds";
}

countdown();
setInterval(countdown,1000);