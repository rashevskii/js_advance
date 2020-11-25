// 1
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const text = document.querySelector('.text').textContent;
const reg = /'/g;
btn.addEventListener('click', () => {
    const newText = text.replace(reg, '"');
    document.querySelector('.output-text').innerHTML = newText;
});

// 2
const reg2 = /\B'|'\B/g;
btn2.addEventListener('click', () => {
    const newText2 = text.replace(reg2, '"');
    document.querySelector('.output-text').innerHTML = newText2;
});

// 3
const regText = /^[a-zа-яё]+$/i;
const regEmail = /^[\w._-]+@\w+\.[a-z]{2,4}$/i;
const regTel = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
const sbm = document.querySelector('.put');

const getWarns = () => {
    const warnName = document.querySelector('#warn-name');
    const warnEmail = document.querySelector('#warn-email');
    const warnPhone = document.querySelector('#warn-phone');    
    return {
        warnName,
        warnEmail,
        warnPhone,
    }
}
const getInputs = () => {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const tel = document.querySelector('#phone');
    return {
        name,
        email,
        tel,
    }
};
const checkInput = (regExp, input, warn) => {
    return () => {
        if (!regExp.test(input.value)) {
            input.setAttribute('style', 'border: 1px solid red');
            warn.classList.add('warn-show');
        } else {
            input.removeAttribute('style');
            warn.classList.remove('warn-show');
        }
    }
};
const inputs = getInputs();
const warns = getWarns();

inputs.name.addEventListener('input', checkInput(regText, inputs.name, warns.warnName));
inputs.email.addEventListener('input', checkInput(regEmail, inputs.email, warns.warnEmail));
inputs.tel.addEventListener('input', checkInput(regTel, inputs.tel, warns.warnPhone));

sbm.addEventListener('click', (e) => {
    e.preventDefault();
    getInputs();
    checkInput(regText, inputs.name, warns.warnName);
    checkInput(regEmail, inputs.email, warns.warnEmail);
    checkInput(regTel, inputs.tel, warns.warnPhone);
});
