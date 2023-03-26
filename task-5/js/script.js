/*
1. 
Напишіть клас Круг та реалізуйте функціонал:
- Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
- Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
- Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
- Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
- Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
- Визначте метод перевірки попадання крапки до кола;
- Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()). 
*/
class Circle {
    constructor(centerX, centerY, radius) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }
    get circumferenceLength () {
        return 2 * Math.PI * this.radius
    }
    static lengthByRadius (radius) {
        return 2 * Math.PI * radius
    }
    clone () {
        return new Circle(this.centerX, this.centerY, this.radius)
    }
    static fromCoordinates (centerX, centerY, radius) {
        return new Circle(centerX, centerY, radius)
    }
    pointInCircle (x,y) {
        const distance = Math.sqrt((x - this.centerX) ** 2 + (y - this.centerY) ** 2)
        return distance <= this.radius
    }
    toString(){
        return `Circle: CenterX = ${this.centerX}, CenterY = ${this.centerY}, Radius = ${this.radius}`
    }
}
/*
2. 
Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта. 
*/
function propsCount(currentObject) {
    return Object.keys(currentObject).length
}

let object = {
    1: '',
    2: '',
    3: '',
}
console.log(propsCount(object))

/*
3. 
-  Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить у консоль ім’я і прізвище особи. 
- Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету). 
- В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента. 
- Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
Приклад результату: 
*/
class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName () {
        console.log(`${this.name} ${this.surname}`);
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super (name, surname)
        this.year = year
    }
    showFullName(midleName) {
        console.log(`${this.name} ${this.surname} ${midleName}`)
    }
    showCourse () {
        return console.log(new Date().getFullYear() - this.year)
    }
}

let O = new Student('Olexii', 'Luhovyi', 2019)
O.showCourse()

/*
4. 
А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
- поле, яке зберігає колір маркера;
- поле, яке зберігає кількість чорнила в маркері (у відсотках);
- метод друку (метод приймає рядок і виводить текст відповідним кольором;
текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів
*/

class Marker {
    constructor (color, amountOFInk) {
        this.color = color;
        this.amountOFInk = amountOFInk;
    }
    print (text) {
        let inkRequired = text.replaceAll(/\s/g, ' ').length * 0.5;
        if (inkRequired <= this.amountOFInk) {
            console.log(`%c${text}`, `color: ${this.color}`)
        } else {
            console.log('Theere is not enough ink in marker')
        }
    }
}

class ModernMarker extends Marker {
    constructor (color, inkLevel) {
        super(color, inkLevel)
        this.inkLevel = inkLevel;
    }
    refill (ink) {
        this.amountOFInk = ink ;
        console.log(`Merker was refilled on ${ink}%`)
    }
}

let firstMarker = new Marker ('red', 50)
firstMarker.print('Hello World')
let secondMarker = new ModernMarker ('blue', 5)
secondMarker.print('Hello world!')
secondMarker.refill(90)
secondMarker.print('Hello World!')

/*
5.
Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
       1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
       2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
       3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
        4) Вивести значення зарплати з новим experience.
        5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value 
        6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker. 
*/

class Worker {
    constructor (fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }
    showSalary () {
        const salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName}'s salary: ${salary}`)
    }
    showSalaryWithExperience () {
        const salary = this.dayRate * this.workingDays * this._experience
        console.log(`${this.fullName}'s salary with experience: ${salary}`)
    }
    get Exp () {
        return this._experience
    }
    set Exp (x) {
        return console.log(`New experience: ${this._experience = x}`)
        
    }
}

let worker1 = new Worker('John Johnson', 20, 23);
worker1.showSalary();
worker1.showSalaryWithExperience();
worker1.Exp = 1.5
worker1.showSalaryWithExperience()

let worker2 = new Worker ('Bob Smith', 48, 22);
worker2.showSalary();
worker2.Exp = 1.5;
worker2.showSalaryWithExperience()

let worker3 = new Worker ('Sandy Witch', 29, 23);
worker3.showSalary();
worker3.Exp = 1.5;
worker3.showSalaryWithExperience()

const workers = [worker1, worker2, worker3];
workers.sort((a, b) => a.dayRate * a.workingDays * a._experience - b.dayRate * b.workingDays * b._experience);

for (const worker of workers) {
  console.log(`${worker.fullName}: ${worker.dayRate * worker.workingDays * worker._experience}`);
}



