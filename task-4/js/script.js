//1.
//Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
function sumSliceArray(arr, first, second) {
    if (typeof first !== 'number' || typeof second !== 'number') {
        throw new Error('Arguments must be a numbers!');
    }
    if (first >= arr.length || second >= arr.length || first < 0 || second < 0) {
        throw new Error('Indexes of elements are not in array');
    }
    if (Array.isArray(arr) !== true) {
        throw new Error('The object is not array!')
    }
    return arr[first] + arr[second]
}

try {
    const Arr = [0, 1, 2, 3, 4, 5, 6, 7,]
    console.log(sumSliceArray('123456789', 5, 1))
} catch (error) {
    console.log(error);
}

//2.
//Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці catch передбачена можливість виведення назви та опису помилки.
function checkAge() {
    const Name = prompt('Enter your name!');
    const Age = prompt("Enter your age!!!!!!");
    const Status = prompt('Enter your status!');
    try {
        if (Age === "" || Name === "" || Status === "") {
            throw new Error('The field is empty!');
        }
        if (isNaN(Age)) {
            throw new TypeError('Age must be a number!');
        }
        if (Age < 18 || Age > 70) {
            throw new RangeError('Invalid age');
        }
        if (Status !== 'Адмін' && Status !== 'Модератор' && Status !== 'Користувач') {
            throw new EvalError('Invalid status entered');
        }
        alert('You can watch the movie!')
    } catch (error) {
        alert(error.name + ": " + error.message)
    }
}

checkAge();

//3.
//Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
//Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error('Incorrect type of data');
    }
    if (width <= 0 || height <= 0) {
        throw new Error('Width and height must be greater than 0');
    }
    if (width === height) {
        throw new Error(`Width and height shouldn't be equal`)
    }
    return width * height
}

try {
    calcRectangleArea(4, '4')
} catch (error) {
    console.log(`Error: ${error.message}`)
}

//4.
//Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
//Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
//Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = 'MonthException';
    }
}

function showMonthName(month) {
    const monthsName = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (month < 1 || month > 12) {
        throw new MonthException('Incorrect month number');
    }
    return monthsName[month - 1]
}

try {
    console.log(showMonthName(5));
    console.log(showMonthName(0));
} catch (error) {
    if (error instanceof MonthException) {
        console.log(`${error.name}: ${error.message}`)
    } else {
        console.log(`Other error: ${error.message}`)
    }
}