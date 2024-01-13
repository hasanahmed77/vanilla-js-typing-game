const input = document.querySelector('input');
const timer = document.querySelector('.timer');
const words = document.querySelector('.words');
const current = document.querySelector('.current')
const next = document.querySelector('.next')
const button = document.querySelector('.btn')
const answer = document.querySelector('.answer')

let timerStart = false;
let time = 0;
let score = 0;
let i = 0;
let counter = 0;
let userInput = '';
let endOfArray = 10;
let startOfArray = 0;

let WORDS= "If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance If you want to increase the potato and fight with dogs and cats in the rain we shall dance"
// let NEXT_WORDS = "with dogs and cats in the rain we shall dance"


listOfWords = WORDS.split(' ');
// listOfNextWords = NEXT_WORDS.split(' ')

listOfWordsSpan = listOfWords.map((word, index) => `<span class =1>${word}</span>`);
// listOfNextWordsSpan = listOfNextWords.map((word, index) => `<span class =1>${word}</span>`);



current.innerHTML = listOfWordsSpan.slice(startOfArray,endOfArray).join(' ');
// next.innerHTML = listOfNextWordsSpan.join(' ')
console.log(listOfWordsSpan.slice(0,4).join(' '), 'SPAN')


input.addEventListener('input', e =>{
    userInput = e.target.value.toLowerCase();

    if(e.target.value.length >= 1) timerStart = true

    if(e.target.value.includes(' ')){
        if(userInput.slice() === (listOfWords[i].toLowerCase() + " ")){

            console.log(listOfWords[i], 'LIST')
            listOfWordsSpan[i] = listOfWordsSpan[i].replace('1', 'passed')
            console.log(listOfWordsSpan[i], "SPAn")
            console.log(startOfArray, endOfArray)
            current.innerHTML = listOfWordsSpan.slice(startOfArray,endOfArray).join(' ');
            score++;
            counter++
            i++;

            if(endOfArray != listOfWordsSpan.length){
                if(counter === 4){
                    startOfArray += 4
                    endOfArray += 4;
                    counter = 0
                }
            }


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

button.addEventListener('click', () => {
    location.reload()
})


//  TIMER

const TIMER = setInterval(() => {
    if(timerStart && time <= 60){
        time++
        console.log(time)
        timer.innerHTML= time;
        
        if(time === 60){
            // alert(`Your score: ${score}`);
            answer.innerText = `Your Typing Speed: ${score} words per minute`
            button.style.display = 'block'
            clearInterval(TIMER)
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

