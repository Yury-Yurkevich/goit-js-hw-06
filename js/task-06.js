// const getText = document.querySelector('#validation-input');

// getText.addEventListener('blur', (event) => {
//     function setClass (a, b) {
//         if(getText.classList.contains(a)) {
//         } else if(getText.classList.contains(b)) {
//             getText.classList.replace(b, a);
//             } else {
//                 getText.classList.add(a) 
//             };
//     }
//     event.currentTarget.value.length == Number(getText.dataset.length)? setClass ('valid', 'invalid') : setClass ('invalid', 'valid');    
// });


const getText = document.querySelector("#validation-input");
getText.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(getText.dataset.length)) {
    getText.classList.remove("invalid");
    getText.classList.add("valid");
  } else {
    getText.classList.remove("valid");
    getText.classList.add("invalid");
  }
});
