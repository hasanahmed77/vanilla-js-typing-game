import { randomWords } from "./words.js";

// Elements
const timer = document.querySelector('.timer');
const answer = document.querySelector('.answer')
const current = document.querySelector('.current')
const button = document.querySelector('.btn')
// Element that is used here and in app.js
export const input = document.querySelector('input');

// Variables
let timerStart = false;
let score = 0;
let i = 0;
let counter = 0;
let userInput = '';
const listOfWords = randomWords.split(' ');

// Variables that are used here and in app,js
export let time = 0;
export const listOfWordsSpan = listOfWords.map(word => `<span class =1>${word}</span>`);
export let endOfArray = 10;
export let startOfArray = 0;

// Functions for export
export function getRandomNumber (min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }

export function handleClick () {
    location.reload()
}

export function handleInput(e) {
    userInput = e.target.value;

    if(userInput.length >= 1) timerStart = true

    answer.innerText = ''

    if(userInput.includes(' ')){
        if(userInput.slice() === (listOfWords[i] + " ")){
            listOfWordsSpan[i] = listOfWordsSpan[i].replace('1', 'passed')
            current.innerHTML = listOfWordsSpan.slice(startOfArray,endOfArray).join(' ');

            score++;
            counter++
            i++;

            if(endOfArray != listOfWordsSpan.length){
                if(counter === 5){
                    startOfArray += 5
                    endOfArray += 5;
                    counter = 0
                }
            }
        }
        e.target.value= ''
        userInput = ''
    }
}

export function handleUI(TIMER){
    if(timerStart){
        time++
        timer.innerHTML= time;

        const wordOrWords = checkIfWordOrWords()
        
        if(time === 60){
            answer.innerHTML = `Your typing speed: <span class="ans">${score}</span> ${wordOrWords} per minute`
            button.style.display = 'block'

            clearInterval(TIMER)

            input.value = ''
            input.setAttribute('disabled', '')
        }
}
}

// Function used in handleUI
function checkIfWordOrWords() {
    if(score > 1){
        return 'words'
    } else {
        return 'word'
    }
}