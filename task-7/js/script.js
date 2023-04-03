/**7-1. 
За допомогою методів об’єкта window створити:
        1) нове вікно розміром 300х300 пікселів.
        2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
        3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
        4) із затримкою 2 сек закрийте вікно. */
let newWindow = window.open('', '', 'width=300, height=300')

setTimeout(() => {
        newWindow.resizeTo(500, 500)
}, 2000)
setTimeout(() => {
        newWindow.moveTo(200, 200)
}, 4000)
setTimeout(() => {
        newWindow.close()
}, 6000)
/**7-2. 
Для заданої HTML-сторінки:
напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту тега <p>:
колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS". */
let tagP = document.getElementById('text');
const button = document.querySelector('.button');
button.addEventListener('click', changeCSS);

function changeCSS (event) {
        if(event.target.classList.contains('button')) {
                tagP.style.color = 'orange'
                tagP.style.fontSize = '20px'
                tagP.style.fontFamily = 'Comic Sans MS'
        }

}

/* 7-3. 
Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
        1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
        2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
        3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
        4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
        Приклад – курсор наведений на лінку.
*/
const container = document.querySelector('.task-3')
const link = document.querySelector('.link')
const firstButton = document.querySelector('.first-button')
const secondButton = document.querySelector('.second-button')
const thirdButton = document.querySelector('.third-button')

firstButton.addEventListener('click', click)
secondButton.addEventListener('dblclick', doubleClick)
thirdButton.addEventListener('mousedown', mouseDown)
thirdButton.addEventListener('mouseup', mouseUp)
link.addEventListener('mouseover', mouseOver)
link.addEventListener('mouseout', mouseOut)

function click (event) {
        if (event.target.classList.contains('first-button')) {
                container.style.backgroundColor = 'blue'
        }
}

function doubleClick (event) {
        if (event.target.classList.contains('second-button')) {
                container.style.backgroundColor = 'pink'
        }
}

function mouseOver (event) {
        if (event.target.classList.contains('link')) {
                container.style.backgroundColor = 'yellow'
        }
}

function mouseOut (event) {
        if (event.target.classList.contains('link')) {
                container.style.backgroundColor = 'white'
        }
}

function mouseDown (event) {
        if (event.target.classList.contains('third-button')) {
                container.style.backgroundColor = 'brown'
        }
}

function mouseUp (event) {
        if (event.target.classList.contains('third-button')) {
                container.style.backgroundColor = 'white'
        }
}

/*7-4. 
Реалізуйте програму, 
яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.*/
const list = document.querySelector('#list')
const removeButton = document.querySelector('.remove-from-list')
removeButton.addEventListener('click', removeFromList)


function removeFromList (event) {
        if (event.target.classList.contains('remove-from-list')) {
                const selectedElement = list.options[list.selectedIndex]
                list.removeChild(selectedElement)
        }
}

/*
7-5. 
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
Приклад роботи:
*/
const taskFiveContainer = document.querySelector('.task-5')
const liveButton = document.querySelector('.live-button')

liveButton.addEventListener('mouseover', mouseOn)
liveButton.addEventListener('mouseout', mouseOut2)
liveButton.addEventListener('click', pressed)


function mouseOn (event) {
        if(event.target.classList.contains('live-button')){
                const newTag = document.createElement('p')
                const newText = document.createTextNode('Mouse on me!')
                newTag.appendChild(newText)
                taskFiveContainer.appendChild(newTag)
        }
}

function pressed (event) {
        if(event.target.classList.contains('live-button')){
                const newTag = document.createElement('p')
                const newText = document.createTextNode('I was pressed!')
                newTag.appendChild(newText)
                taskFiveContainer.appendChild(newTag)
        }
}
function mouseOut2 (event) {
        if(event.target.classList.contains('live-button')){
                const newTag = document.createElement('p')
                const newText = document.createTextNode('Mouse is not on me!')
                newTag.appendChild(newText)
                taskFiveContainer.appendChild(newTag)
        }
}

/*
7-6. 
Реалізуйте програму, яка відслідковуватиме зміну розміру 
(ширини і висоти) вікна браузера і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
*/
const windowSize = document.querySelector('.window-size')
let currentWidth = window.innerWidth;
let currenHeight = window.innerHeight;
let timeout  
window.addEventListener('resize', showSize)

function showSize () {
        let width = window.innerWidth
        let height = window.innerHeight
        currenHeight = height
        currentWidth = width
        clearTimeout(timeout);
        timeout = setTimeout (function () {
                const newTag = document.createElement('p')
                const newText = document.createTextNode(`Width: ${currentWidth} Height: ${currenHeight}`)
                newTag.appendChild(newText)
                windowSize.appendChild(newTag)
        }, 500)
        
}
showSize()

/*
7-7. 
На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. 
Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - в правому випадаючому  
списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. 
Також потрібно нижче вивести назву обраної країни і місто.
Код HTML-сторінки:
*/
const countries = document.querySelector('#country')
const citiesSelected = document.querySelector('#cities')
const tagPCities = document.querySelector('.cities p')
const citiesByCountry = {
        ger: ['Berlin', 'Hamburg', 'Munich'],
        usa: ['New Yourk', 'Sacramento', 'Washington'],
        ukr: ['Lviv', 'Odesa', 'Kyiv'],
}
country.addEventListener('change', getCitiesByCountry)
citiesSelected.addEventListener('change', changeCity)

function getCitiesByCountry () {
        citiesSelected.innerHTML = ''
        tagPCities.innerHTML = ''
        const currentCountry = countries.value
        const cities = citiesByCountry[currentCountry]
        for (let i = 0; i < cities.length; i++) {
                const option = document.createElement('option')
                option.value = cities[i]
                option.text = cities[i]
                citiesSelected.appendChild(option)
        }
        tagPCities.innerHTML = `Selected: ${countries.options[countries.selectedIndex].text}, ${citiesSelected.value}`
}
getCitiesByCountry(countries.value)

function changeCity () {
        tagPCities.innerHTML = ''
        const currentCities = citiesSelected.value
        tagPCities.innerHTML = `Selected: ${countries.options[countries.selectedIndex].text}, ${currentCities}`
}
