/*
9-1.
Для заданої сторінки знайдіть всі <h2> з класом head, 
зробіть для них зелений колір фону, потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.
*/
$('h2.head').css('background-color', 'green');
$('h2>span.inner').css('font-size', '35px');

/*
9-2. 
На HTML-сторінці є посилання <a>. У випадку коли, href починається на https://, потрібно додати посиланню атрибут target="_blank".
*/
$(document).ready(function() {
    $("a[href^='https://']").attr("target", "_blank");
});

/*
9-3. 
Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.
*/
$('h3').next('div').each(function() {
    $(this).insertBefore($(this).prev('h3'));
});

/*
9-4. 
На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.
*/
const checkboxes = $('input[type="checkbox"]');
checkboxes.change(function () {
    let selected = 0;
    checkboxes.each(function() {
        if ($(this).prop('checked')) {
            selected++
        };
    });
    if (selected === 3) {
        checkboxes.prop('disabled', true);
    };
});




