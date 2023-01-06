const daysHtml = document.getElementById("countdias");
const hoursHtml = document.getElementById("counthoras");
const minHtml = document.getElementById("countminutos");
const secHtml = document.getElementById("countsegundos");

const ccxpDate = "1 Feb 2023";


function countdown(){

const startDate = new Date(ccxpDate);
const pointDate = new Date();



const  totalSeconds = (startDate - pointDate) / 1000;

console.log(totalSeconds)

const days = Math.floor(totalSeconds / 3600 / 24);
const hours = Math.floor(totalSeconds/ 3600) % 24;
const mins = Math.floor(totalSeconds / 60) % 60;
const secs = Math.floor(totalSeconds) % 60;

daysHtml.innerHTML = days + 'D';
hoursHtml.innerHTML = formatTime(hours +'H');
minHtml.innerHTML = formatTime(mins + 'M');
secHtml.innerHTML = formatTime(secs + 'S');




}

function formatTime(time){
    return time < 10 ? ` 0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
