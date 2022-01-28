"use strict";

// const result = confirm('Are you here?');
// console.log(result);

//const answer = prompt('Вам есть 18?', 'Нет');

const answers = [];

answers[0] = prompt('Как вас зовут?', '');
answers[1] = +prompt('Сколько вам лет?', '');
answers[2] = prompt('Как дела?', '');

document.write(answers);