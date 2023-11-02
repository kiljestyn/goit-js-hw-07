const input = document.querySelector('#validation-input');
const length = input.getAttribute('data-length');

input.addEventListener('blur', () => {
  const inputValue = input.value.length;

  if (inputValue === length) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});



// function onInputBlur(event) {
//     const userValue = event.currentTarget.value.length;
//     console.log(userValue);
//     const validLength = Number(inputEl.dataset.length);
//     console.log(validLength);
//     inputEl.classList.remove('valid', 'invalid');

//     if (userValue === validLength) {
//         inputEl.classList.add('valid');
//     } else {
//         inputEl.classList.add('invalid');
//     }
// }