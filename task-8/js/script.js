//8-1. 
//Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
function upperCase (string) {
        const regExpr = /[A-Z]/
        if (regExpr.test(string)) {
            console.log("String's starts with uppercase character")
        } 
        else {
            console.log("String's not starts with uppercase character")
        }
}

upperCase('JS')

/*
8-2. 
Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
*/
function validateEmail (str) {
    const regExpr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regExpr.test(str)
}

console.log(validateEmail('hello@gmail.'))

/*
8-3. 
Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
Приклад роботи:
Вхідний рядок    "Java Script"
Вихід    “Script, Java”
*/

function reversedString (text) {
    return text.replace(/(\w+)\s(\w+)/, '$2 $1')
}

console.log(reversedString('Hello World'))

/*
8-4. 
Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).
*/

function valideCard (cardNumber) {
    const validateCardExpr = /^(\d{4}\s){3}\d{4}$/
    return console.log(validateCardExpr.test(cardNumber))
}
valideCard('1234 1234 1234 1234')

/*

8-5. 
Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
Вимоги:
•  Цифри (0-9).
•  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
•  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
•  Символ “-” не може повторюватися.
*/

function emailValidate (email) {
    const regExpr = /^([A-Za-z0-9][A-Za-z0-9_-])*(-[A-Za-z0-9_]+)?@[^\s@]+\.[^\s@]+$/
    return regExpr.test(email)
}

/*
8-6. 
Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, 
що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
Приклад роботи:
*/

function validateLogin (log) {
    const loginRegExpr = /^[A-Za-z][A-Za-z\d]{1,9}$/
    loginRegExpr.test(log)
    const numbers = log.match(/\d+(\.\d+)/g);
    if(numbers) {
        console.log(numbers)
    }
}
validateLogin('hel2.5lol')


