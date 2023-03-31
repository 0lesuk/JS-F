const body = document.createElement('body');
const main = document.createElement('main');
const div = document.createElement('div');
const p = document.createElement('p');


main.setAttribute('class', 'mainClass check item');
div.setAttribute('id', 'myDiv');
p.innerHTML = 'First paragraph'

document.getElementsByTagName('html')[0].appendChild(body)
body.appendChild(main);
main.appendChild(div);
div.appendChild(p);

