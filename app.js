

let countdown = new Date("Nov 28, 2022 09:00:00").getTime();


// setting coundown
let myCounter = setInterval( ()=>{
    let now = new Date().getTime();   
    let timeleft = countdown - now;
    
    //getting the actual digits to represent the days, hours, minutes and seconds
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60 )) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60 ))/1000);

            //diplaying the results on the page
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
},1000)







