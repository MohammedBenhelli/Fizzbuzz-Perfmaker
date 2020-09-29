const {fromEvent} = rxjs;
const countResult = document.querySelector('#result-click');
const result = document.querySelector('#result');
const moon = document.querySelector('.xl');
let count = 0;

const fizzBuzz = () => {
    countResult.innerHTML = String(count);
    if (count % 3 === 0 && count % 5 === 0 && count !== 0)
        result.innerHTML ='FizzBuzz';
    else if (count % 3 === 0 && count !== 0)
        result.innerHTML = 'Fizz';
    else if (count % 5 === 0 && count !== 0)
        result.innerHTML = 'Buzz';
    else result.innerHTML = String(count);
};

const darkMode = () => document.body.classList.toggle('dark-mode');

fromEvent(document, 'click').subscribe( () => count++);
fromEvent(moon, 'click').subscribe(darkMode);
setInterval(fizzBuzz, 1000);
