
const input = document.querySelector('#validation-input');
const lengthInput = input.getAttribute('data-length');

input.addEventListener('blur', () => {
  const inputValueLength = input.value.length;
   
  if (inputValueLength === Number(lengthInput)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});