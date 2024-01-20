//Задание 1

function numMin(a, b) {
    return a < b ? a : b;
}

//Задание 2

function checkNum(num) {
    if (num % 2 === 0) {
        return "Число четное";
    } else {
        return "Число нечетное";
    }
}

//Задание 3.1

function printNum(num) {
    console.log(num * num);
}

//Задание 3.2

function printNum(num) {
    return num * num;
}

//Задание 4

function userAge() {
    let age = prompt("Сколько Вам лет?");
    if (age < 0) {
        console.log("Вы ввели неправильное значение");
    } else if (age <= 12) {
        console.log("Привет, друг!");
    } else {
        console.log("Добро пожаловать!");
    }
}

//Задание 5

function plentyNum(a, b) {
    if (isNaN(a || isNaN(b))) {
        return "Одно или оба значения не являются числом"
    } else {
        return a * b
    }
}

//Задание 6

function cubeNum() {
    let num = prompt("ВВседите число");
    num = Number(num);
    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${num} в кубе равнятеся ${num ** 3}`;
    }
}

//Задание 7

const circle1 = {
    radius: 5,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
    radius: 10,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

function getArea() {
    return Math.PI * this.radius * this.radius;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

//Задание 8

function getSeasons(month) {
    if (month >= 3 && month <= 5) {
        return "Весна";
    } else if (month >= 6 && month <= 8) {
        return "Лето";
    } else if (month >= 9 && month <= 11) {
        return "Осень";
    } else if (month == 12 || month == 1 || month == 2) {
        return "Зима";
    } else {
        return "Неизвестное число";
    }
}

console.log(getSeasons(prompt("Введите число")));