/* //Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

console.log(people.sort((a, b) => a.age - b.age)); */

//Задание 2
function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunc) {
    const result = [];
    for (let item of array) {
        if (ruleFunc(item)) {
            result.push(item);
        }
    }
    return result;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));

/* //Задание 3

let counter = 0;
const interval = setInterval(() => {
    console.log(new Date());
    counter += 3;
    if (counter >= 30) {
        clearInterval(interval);
        console.log("30 секунд прошло");
    }
}, 3000);


//Задание 4

function delayForSecond(callback) {
    setTimeout(function () {
        callback();
    }, 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
});


//Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

delayForSecond(() => sayHi(('Глеб'))); */