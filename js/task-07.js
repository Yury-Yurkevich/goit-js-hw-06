let getInput = document.querySelector('#font-size-control');
let getSpan = document.querySelector('#text');

getInput.addEventListener('input', (event) => getSpan.style.fontSize = event.target.value  + 'px');
