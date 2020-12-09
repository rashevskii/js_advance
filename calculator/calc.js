const output = document.querySelector(".output-result");
const firstNumber = document.querySelector(".first-number");
const secondNumber = document.querySelector(".second-number");
const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const devisionButton = document.querySelector(".devision");
const multiplayButton = document.querySelector(".multiplay");
const clearButton = document.querySelector(".clear");

const clear = () => {
    firstNumber.value = "";
    secondNumber.value = "";
    output.textContent = "";
};

const getNumbers = () => {
    const numbers = [];
    numbers.push(+firstNumber.value);
    numbers.push(+secondNumber.value);
    return numbers;
};
const insertRes = (value) => output.textContent = value;

const plus = (val1, val2) => {
    if (!isNaN(val1) && !isNaN(val2)) {
        return val1 + val2;
    } else {
        return "Введено некорректное значение";
    }
};
const minus = (val1, val2) => {
    if (!isNaN(val1) && !isNaN(val2)) {
        return val1 - val2;
    } else {
        return "Введено некорректное значение";
    }
};
const dev = (val1, val2) => {
    if (!isNaN(val1) && !isNaN(val2) && val2 != 0) {
        return val1 / val2;
    } else {
        return "Введено некорректное значение";
    }  
};
const mul = (val1, val2) => {
    if (!isNaN(val1) && !isNaN(val2)) {
        return val1 * val2;
    } else {
        return "Введено некорректное значение";
    }
};

plusButton.addEventListener("click", () => {
    const numbers = getNumbers();
    const res = plus(numbers[0], numbers[1]);
    insertRes(res);
});
minusButton.addEventListener("click", () => {
    const numbers = getNumbers();
    const res = minus(numbers[0], numbers[1]);
    insertRes(res);
});
devisionButton.addEventListener("click", () => {
    const numbers = getNumbers();
    const res = dev(numbers[0], numbers[1]);
    insertRes(res);
});
multiplayButton.addEventListener("click", () => {
    const numbers = getNumbers();
    const res = mul(numbers[0], numbers[1]);
    insertRes(res);
});
clearButton.addEventListener("click", () => {
    clear();
});
