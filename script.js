// Выполнить все задачи в теге script.Комментарии, в которых написаны задачи, не
// стирать, код с решением задачи пишем под комментарием.

/*
1. При изменении значения в input с id="from", значение содержащееся в нем
должно моментально отображаться в span. То есть при печати в input'е тег span
также должен меняться.
*/
const fromEl = document.getElementById('from');
const spanEl = fromEl.nextElementSibling;
fromEl.addEventListener('input', function(e) {
    spanEl.textContent = fromEl.value;
});

/*
2. При клике на кнопку с классом messageBtn необходимо элементу с классом
message:
1) добавить два класса: animate_animated и animate_fadeInLeftBig
2) поставить данному элементу стиль visibility в значение 'visible'.
*/
const buttonMsg = document.querySelector('.messageBtn');
const elementMsg = document.querySelector('.message');
elementMsg.style.visibility = 'hidden';
buttonMsg.addEventListener('click', function() {
    elementMsg.classList.add('animate_animated', 'animate_fadeInLeftBig');
    elementMsg.style.visibility = 'visible';
});

/*

3. Необходимо при отправке формы проверить, заполнены ли все поля в этой
форме. Если какое-либо поле не заполнено, форма не должна отправляться, также
должны быть подсвечены незаполненные поля (необходимо поставить класс error
незаполненным полям).
Как только пользователь начинает заполнять какое-либо поле, необходимо,
при вводе в данное поле, произвести проверку:
Если поле пустое, необходимо данное поле подсветить (поставить класс error
данному полю).
Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/

const formEl = document.querySelector('form');
const formElArray = document.querySelectorAll('input, select');

formEl.addEventListener('submit', (e) => {
    formElArray.forEach((element) => {
        if (element.value === '') {
            element.style.border = '3px solid red';
            e.preventDefault();
        } else {
            element.style.border = '1px solid black';
        }

    });
});

formElArray.forEach((element) => {
    element.addEventListener('input', (e) => {
        if (e.target.value === '') {
            e.target.style.border = '3px solid red';
        } else {
            e.target.style.border = '1px solid black';
        }
    })


});

// Задание с семинара
// Создать поле ввода и под ним заголовок h1 с текстом“ Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

const h1El = document.querySelector('h1');
fromEl.addEventListener('input', function(e) {
    h1El.textContent = fromEl.value;
});