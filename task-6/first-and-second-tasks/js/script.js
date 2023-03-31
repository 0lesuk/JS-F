/**
 1. 
На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
        1) першого елемента списку
        2) останнього елемента списку
        3) другого елемента списку
        4) четвертого елемента списку
        5) третього елемента списку
Приклад:
•        1
•        2
•        3
•        4
•        5
Результат виводу: 1, 5, 2, 4, 3
 */
const listItems = document.querySelectorAll('#list li');
const changedOrder = `${listItems[0].textContent}, ${listItems[listItems.length - 1].textContent}, ${listItems[1].textContent}, ${listItems[3].textContent}, ${listItems[2].textContent}`
alert(changedOrder);

/*
2.
Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.
*/

const header = document.getElementsByTagName('h1')[0];
const myDiv = document.querySelectorAll('#myDiv p');
const myList = document.getElementById('myList');
const span = document.getElementsByTagName('span')[0];

header.style.background = 'green';

myDiv[0].style.fontWeight = 'bold';
myDiv[1].style.color = 'red';
myDiv[2].style.textDecoration = 'underline';
myDiv[3].style.fontStyle = 'italic';

for (let i = 0; i < myList.children.length; i++) {
    myList.children[i].style.display = 'inline-block'
};

span.style.display = 'none';
