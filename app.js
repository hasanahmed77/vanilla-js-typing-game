const input = document.querySelector('input');
const timer = document.querySelector('.timer');
const words = document.querySelector('.words');
const current = document.querySelector('.current')
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

const WORDS = "The brown cat jumps over a lazy dog as the sun sets behind the hills in a land far away where dreams come true every night while stars twinkle brightly in the sky with a gentle breeze blowing through the trees and a river flowing calmly nearby reflecting the moons glow creating a peaceful scene that soothes the soul and inspires creativity in the minds of those who gaze upon it with wonder and amazement in this enchanted place where time seems to stand still imagination takes flight and possibilities are endless like a canvas waiting for an artists brushstroke to bring vibrant colors to life in a masterpiece that tells a story of love joy and resilience against the backdrop of natures beauty the chirping of crickets adds a melodic rhythm to the symphony of the night and the fragrance of flowers perfumes the air with a sweet aroma that lingers inviting all to breathe deeply and savor the moment Its a haven of tranquility where worries melt away and the only sound is the rustling of leaves in the gentle breeze creating a serene melody that resonates in the heart as you type away envision this idyllic scene unfolding words flowing effortlessly like a stream of consciousness dancing across the keyboard capturing the essence of the magical landscape each word becomes a step in the dance a stroke on the canvas building a tapestry of text that paints a vivid picture for the reader the challenge is not just to type but to immerse yourself in the words letting them guide your fingers in a dance of creation as you craft a narrative that transports the reader to a world where words are not just symbols but gateways to other realms of imagination inviting them to join in the dance and become part of the story that unfolds with every keystroke"
listOfWords = WORDS.split(' ');
listOfWordsSpan = listOfWords.map(word => `<span class =1>${word}</span>`);

current.innerHTML = listOfWordsSpan.slice(startOfArray,endOfArray).join(' ');


input.addEventListener('input', e =>{
    userInput = e.target.value.toLowerCase();

    if(userInput.length >= 1) timerStart = true

    if(userInput.includes(' ')){
        if(userInput.slice() === (listOfWords[i].toLowerCase() + " ")){
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
        } else {
            score = score
        }
        e.target.value= ''
        userInput = ''
    }
})

button.addEventListener('click', () => {
    location.reload()
})

const TIMER = setInterval(() => {
    if(timerStart){
        time++
        timer.innerHTML= time;
        
        if(time === 60){
            answer.innerHTML = `Your Typing Speed: <span class="ans">${score}</span> words per minute`
            button.style.display = 'block'
            clearInterval(TIMER)
        }
    }
}, 1000)