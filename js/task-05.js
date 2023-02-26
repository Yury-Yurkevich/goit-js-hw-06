const outputName = document.querySelector('#name-output');
const inputName = document.querySelector('#name-input');


inputName.addEventListener('input', (event) => {   
    if (event.currentTarget.value === "") {
        outputName.textContent = "Anonymous";    
    } else outputName.textContent = event.currentTarget.value;    
});



// inputName.addEventListener('input', (event) => outputName.textContent = event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value);
