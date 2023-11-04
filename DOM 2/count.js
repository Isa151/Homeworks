const counter = document.getElementById('counter');
let incrementButton = document.getElementById('increment');
let decrementButton = document.getElementById('decrement');

let count = 0;

function updaterCounter() {
    counter.innerHTML = count;
}

function increment() {
    count++;
    updaterCounter();
}

function decrement() {
    count--;
    updaterCounter();
}

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);
const resetButton = document.getElementById('reset');
const randomButton = document.getElementById('random');


function reset() {
    count = 0;
    updaterCounter();
}
function random() {
    count = Math.floor(Math.random() * 101);
    updaterCounter();
}
resetButton.addEventListener('click', reset);
randomButton.addEventListener('click', random);