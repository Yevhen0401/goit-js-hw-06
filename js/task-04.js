const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector("#value");

let currentValue = 0;

decrementButton.addEventListener('click', onClickMinus);

function onClickMinus(event) {
    currentValue -= 1;
    counterValue.textContent = currentValue;
}
 

incrementButton.addEventListener('click', onClickPlus);

function onClickPlus(event) {
    currentValue += 1;
    counterValue.textContent = currentValue;
}




