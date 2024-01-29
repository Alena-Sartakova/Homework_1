/* //Задание 1
let str = "js";
str = str.toUpperCase();
console.log(str); */

/* //Задание 2
function filterStrings(array, startStr) {
    return array.filter(item => item.toLowerCase().startsWith(startStr.toLowerCase()));
} */

/* //Задание 3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number)); */

//Задание 4
/* let nums = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...nums));
console.log(Math.max(...nums)); */

//Задание 5
/* function randomNum() {
    console.log(Math.floor(Math.random()*10)+1);
} */

//Задание 6 
/* function randomNum(n) {
    let result = [];
    for (let i = 0; i < n / 2; i++) {
        result.push(Math.floor(Math.random() * n));
    }
    return result;
} */

//Задание 7
/* function randomBetween(max, min);
return Math.floor(Math.random() * (max - min + 1) + min); */

//Задание 8
/* console.log(new Date()); */

//Задание 9
/* let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate); */

//Задание 10
/* function formatDate(date) {
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let moths = ["Январь", "Ферваль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сенябрь", "Октябрь", "Ноябрь", "Декабрь"];

    return `Дата: ${date.getDate()} ${moths[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]} Время: ${date.getHourse()} ${date.getMinutes()} ${date.getSeconds}`;
}
console.log(formatDate(new Date())); */


//Задание 11
function randomFruits() {
    let randomFruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    randomFruits = randomFruits.sort(() => Math.random() - 0.5);
    alert(randomFruits);

    let firstGuess = prompt("Чему равнялся первый элемент массива?");
    let lastGuess = prompt("Чему равнялся последний элемент массива?");

    if (firstGuess.toLowerCase() === randomFruits[0].toLowerCase() && lastGuess.toLowerCase() === randomFruits[randomFruits.length - 1].toLowerCase()) {
        alert("Поздравляем! Вы угадали оба слова");
    } else if (firstGuess.toLowerCase() === randomFruits[0].toLowerCase() || lastGuess.toLowerCase() === randomFruits[randomFruits.length - 1].toLowerCase()) {
        alert("Вы были близки к победе!");
    } else {
        alert("Вы не угадали ни одного слова.")
    }
}
