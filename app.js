const input = document.querySelector('input');
const timer = document.querySelector('.timer');
const words = document.querySelector('.words');

let timerStart = false;
let time = 0;

input.addEventListener('input', e =>{
    console.log(e.target.value);
    if(e.target.value.length >= 1) timerStart = true

    console.log(timerStart)

    if(e.target.value.includes(' ')){
        console.log('reset')
        e.target.value= ''
    }
})

setInterval(() => {
    if(timerStart){
        console.log(time)
        timer.innerHTML= time;
        time++
    }
}, 1000)