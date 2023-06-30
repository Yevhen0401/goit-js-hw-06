const checkInput = document.querySelector('#name-input');
console.log(checkInput);
const checkOutput = document.querySelector('#name-output');
console.log(checkOutput);

checkInput.addEventListener('input', (evt) => {
checkOutput.textContent = evt.currentTarget.value ? evt.currentTarget.value : "Anonymous";
});

