const minus = (val1, val2) => {
    if (!isNaN(val1) && !isNaN(val2)) {
        return val1 - val2;
    } else {
        return "Введено некорректное значение";
    }
};

module.exports = minus;