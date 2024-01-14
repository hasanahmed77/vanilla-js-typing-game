// Imported elements
import { handleClick, handleInput, handleUI } from "./functions.js";
// Imported variables
import { listOfWordsSpan, startOfArray, endOfArray, input } from "./functions.js";

// Elements
const current = document.querySelector('.current')
const button = document.querySelector('.btn')


current.innerHTML = listOfWordsSpan.slice(startOfArray,endOfArray).join(' ');

input.addEventListener('input', handleInput)
button.addEventListener('click', handleClick)

const TIMER = setInterval(() => { handleUI(TIMER) }, 1000);
