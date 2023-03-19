//1
//Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
//приклад:

const arr = [5, 3, 4, 5, 6, 7, 3];
let k = compact(arr);
function compact(array) {
    return [...new Set(array)];
}

console.log(k);

//2
//Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//- початкове значення
//- кінцеве значення
//а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
function createArray(start, end) {
    const newArr = [];
    for (let i = start; i <= end; i++) {
        newArr.push(i);
    }
    return newArr
}
console.log(createArray(1, 10))

//3
//Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
function showNumbers (a, b) {
    for (let i = a; i <= b; i++) {
        for (let j = 0; j < i - a + 1; j++) {
          console.log(i);
        }
      }
}

//4
//Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
function randArray(k) {
    const randomNumbersArray = [];
    for (let i = 0; i < k; i++){
        const randomNumbers = Math.floor(Math.random() * 500 + 1);
        randomNumbersArray.push(randomNumbers);
    }
    return randomNumbersArray
}
console.log(randArray(6))

//5.
//Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
//Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
const mixed = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a','text'], 'strong', 'broun'];
function getOneTipe (arr) {
    const numbersArray = [];
    const stringsArray = [];
    for (let i of arr){
        if (typeof(i) === 'number') {
            numbersArray.push(i);
        }else if (typeof(i) === 'string') {
            stringsArray.push(i);
        } else if (Array.isArray(i)) {
            const [nestedNumbers, nestedStrings] = getOneTipe(i);
            stringsArray.push(...nestedStrings);
            numbersArray.push(...nestedNumbers);
            }
    }
    return [numbersArray, stringsArray]
}
console.log(getOneTipe(mixed))

//6
//Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
function calc (a, b, op) {
    if (op === 1 && typeof op === 'number') {
        return a - b
    } else if (op === 2 && typeof op === 'number') {
        return a * b
    } else if (op === 3 && typeof op === 'number') {
        return a / b
    } else if (typeof op === 'number' && op > 3) {
        return a + b
    } else {
        return 'Incorrect data'
    }
}

console.log(calc(3, 5, ''))

//7
//Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
function findUnique(arr) {
    let unique = true;
    arr.forEach((el, index) => {
      if (arr.indexOf(el, index + 1) !== -1) {
        unique = false;
      }
    });
    return unique;
  }

console.log(findUnique([1, 2, 3, 5, 3]))