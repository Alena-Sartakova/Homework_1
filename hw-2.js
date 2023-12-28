let a = 10;
alert(a);
a = 20;
alert(a);

let hello = 'Год выпуска первого iPhone - 2007'
alert(hello);

let product = 'Имя создателя JavaScript - Брендан Айк'
alert(product);

let x = 10;
let c = 2;
alert(x + c);
alert(x - c);
alert(x * c);
alert(x / c);

let result = (2 ** 5);
alert(result);

a = 9;
let b = 2;
alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt("Сколько вам лет?")
alert(age)


let user = {
    name: "Nata",
    age: 15,
    isAdmin: true,
}
user["city of residence"] = 'Novosibirsk';
alert(user["city of residence"]);
console.log(user);
user.age = 22;
delete user["city of residence"];

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);
console.log(user[info]);

let userName = prompt("Ваше имя");
alert(`Привет,${userName}!`);
