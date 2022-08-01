const input = document.querySelector('input');
const timer = document.querySelector('.timer');
const words = document.querySelector('.words');

let timerStart = false;
let time = 0;
let score = 0;
let i = 0;
let userInput = '';

const WORDS= "If you want to increase the potato"

words.innerText = WORDS;

listOfWords = WORDS.split(' ');

input.addEventListener('input', e =>{
    userInput = e.target.value.toLowerCase();

    if(e.target.value.length >= 1) timerStart = true

    if(e.target.value.includes(' ')){
        if(userInput.slice() === (listOfWords[i].toLowerCase() + " ")){
            console.log(listOfWords[i], 'LIST')
            score++;
            i++;
            console.log(score, "SCORE")
        } else {
            score = score
        }
        console.log('reset')
        console.log(userInput + 'USERINPUT')
        e.target.value= ''
        userInput = ''
        // i++
        console.log(i, 'I')
    }
})

//  TIMER

setInterval(() => {
    if(timerStart && time <= 60){
        time++
        console.log(time)
        timer.innerHTML= time;
        
        if(time === 60){
            alert(`Your score: ${score}`);
        }
    }
    
}, 1000)



// COMPARING THE INPUT TO THE WORDS
console.log(listOfWords)

// while(time < 60){
//     if(e.target.value === listOfWords[i]){
//         score++;
//     }
//     i++;
//     console.log(score);
// }

