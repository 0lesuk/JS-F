/*
1) вибрати всі теги із класом circle
2) перебрати кожен елемент, і вибрати його data-anim значення
3) вибране значення додати як клас за допомогою classList до цього елемента.
4) перевірити чи застосувались анімації

- вибірка елемента із DOM дерева
- вибрати клас елемента (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- вибрати із data атрибута значення і занести те значення в клас елемента для якого ми вибрали поточний атрибут
*/

const circles = document.querySelectorAll('.circle');
const attributeName = 'data-anim';

for(let j = 0; j < circles.length; j++) {
    const element = circles[j];
    const styles = window.getComputedStyle(element);
    const animation = styles.getPropertyValue('animation')
    if (animation == 'none') {
        console.log(`Animation was not applied for:`, element)
    } else {
        console.log(`Animation was applied for:`, element);
    }
}

for (let i = 0; i < circles.length; i++) {
    const element = circles[i];
    const attribute = element.getAttribute(attributeName);
    element.classList.add(attribute);
}

