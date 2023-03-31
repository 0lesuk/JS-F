// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
const text = document.querySelector('input[type="text"');
const phone = document.querySelector('input[type="phone"');
const date = document.querySelector('input[type="date"');
const email = document.querySelector('input[type="email"');
const out = document.querySelector('.out')
const button = document.querySelector('input[type="submit"');
const dataArray = [];

button.onclick = () => {
    dataArray.push(text.value, phone.value, date.value, email.value)
    return out.innerHTML = dataArray;
}

