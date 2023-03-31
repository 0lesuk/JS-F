 // Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.
const colors = document.querySelector('.colors');
const sizes = document.querySelector('.sizes');
const images = document.getElementsByClassName('shoe')
let price = document.getElementById('outprice');
colors.addEventListener('click', changeColor)
colors.addEventListener('click', changePrice)
colors.addEventListener('click', changeGradient)
colors.addEventListener('click', changeImage)
sizes.addEventListener('click', changedPriceBySize)

function changeColor (event) {
    if (event.target.classList.contains('color')) {
        const currentColor = document.querySelector('.colors .active')
        currentColor.classList.remove('active')
        event.target.classList.add('active')
    }
}

function changePrice (event) {
    if (event.target.classList.contains('color')) {
        const changedPrice = event.target.getAttribute('data-price')
        price.innerHTML = changedPrice
    }
}

function changeGradient (event) {
    if (event.target.classList.contains('color')) {
        const currentGradient = document.querySelector('.gradients .second')
        currentGradient.classList.remove('second')
        const gradients = document.querySelectorAll('.gradients .gradient')
        for (let i = 0; i < gradients.length; i++) {
            if (gradients[i].attributes.color.nodeValue === event.target.attributes.color.nodeValue) {
                gradients[i].classList.add('second')
            }
        }
    }
}

function changedPriceBySize (event) {
    if (event.target.classList.contains('size')) {
        const currentSize = document.querySelector('.sizes .active');
        currentSize.classList.remove('active')
        event.target.classList.add('active')
        const priceIncrease = parseFloat(currentSize.getAttribute('price-increase'))
        const colorElement = document.querySelector('.colors .active')
        const priceByColor = parseFloat(colorElement.getAttribute('data-price'))
        const newPrice = (priceByColor / 100 * priceIncrease) + priceByColor
        price.innerHTML = newPrice.toFixed(2)
    }
}

function changeImage (event) {
    if (event.target.classList.contains('color')) {
        const currentImage = document.querySelector('.shoeBackground .show')
        currentImage.classList.remove('show')
        for (let i = 0; i < images.length; i++) {
            if (images[i].attributes.color.nodeValue === event.target.attributes.color.nodeValue) {
                images[i].classList.add('show')
            }
        }
    }

}



