const input = document.querySelector('input');
const timer = document.querySelector('.timer');
const words = document.querySelector('.words');

let time = 0;

input.addEventListener('input', e =>{
    console.log(e.target.value);

    if(e.target.value.includes(' ')){
        console.log('reset')
        e.target.value= ''
    }
})

