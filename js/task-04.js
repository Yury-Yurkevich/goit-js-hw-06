const counter = document.querySelector('#value');

const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrBtn.addEventListener('click', () => {
    counterValue -= 1;
    counter.textContent = counterValue;
});

incrBtn.addEventListener('click', () => {
    counterValue += 1;
    counter.textContent = counterValue;
});
 