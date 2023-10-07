// recieving items

let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');

// let currentTime = new Date();
// console.log(currentTime);

// recieve the time and remove the date
// get hours,mins,secs

// console.log(currentTime.getHours());
// console.log(currentTime.getMinutes());
// console.log(currentTime.getSeconds());

// hrs.innerHTML = currentTime.getHours();
// mins.innerHTML = currentTime.getMinutes();
// secs.innerHTML = currentTime.getSeconds();

// use setinterval for update the time
setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10 ? '0':"") + currentTime.getHours();

    mins.innerHTML = (currentTime.getMinutes() < 10 ? '0':"") + currentTime.getMinutes();

    secs.innerHTML = (currentTime.getSeconds() < 10 ? '0':"") + currentTime.getSeconds();
},1000)