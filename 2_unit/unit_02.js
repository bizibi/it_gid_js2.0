// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a = 7;
let b = 9;

console.log(a * b);

// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.

let c = 7;
let d = 9;

document.querySelector(".out-2").textContent = c / d;

// document.querySelector('.out-2').textContent =

// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.

let e = 3;
let f = 5;

document.querySelector(".out-3").textContent = e + f;

// document.querySelector('.out-3').textContent =

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.

let e1 = "3";
let f1 = 5;

document.querySelector(".out-4").textContent = e1 + f1;
// document.querySelector('.out-4').textContent =
//ЖС привело все к строке, т к одно из значений строковое

// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.

let e2 = 3;
let f2 = 0;

document.querySelector(".out-5").textContent = e2 / f2;

// document.querySelector('.out-5').textContent =

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.

let e3 = 3;
let f3 = "Hello";

document.querySelector(".out-6").textContent = e3 + f3;

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.

let e4 = 3;
let f4 = "Hello";

document.querySelector(".out-7").textContent = e4 * f4;

// document.querySelector('.out-7').textContent =

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

let inputIn = document.querySelector(".input-in");

function t8() {
  console.log(inputIn.value);
}

document.querySelector(".b-8").onclick = t8;

// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.

let inputIn9 = document.querySelector(".i-9");

function t9() {
  console.log(inputIn9.value);
  inputIn9.value = "";
}

document.querySelector(".b-9").onclick = t9;

// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

let inputIn10 = document.querySelector(".i-10");

function t10() {
  console.log(inputIn10.value * 10);
}

document.querySelector(".b-10").onclick = t10;

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.

let inputIn11 = document.querySelector(".i-11");

function t11() {
  console.log(+inputIn11.value + 10);
}

document.querySelector(".b-11").onclick = t11;

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

let inputIn121 = document.querySelector(".i-12_1");
let inputIn122 = document.querySelector(".i-12_2");
function t12() {
  console.log("Hello " + inputIn121.value + " " + inputIn122.value);
}

document.querySelector(".b-12").onclick = t12;

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

let inputIn131 = document.querySelector(".i-13_1");
let inputIn132 = document.querySelector(".i-13_2");
let outTo = document.querySelector(".out-13");

function t13() {
  outTo.innerHTML = +inputIn131.value + +inputIn132.value;
}

document.querySelector(".b-13").onclick = t13;

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

let inputIn14 = document.querySelector(".i-14");

inputIn14.value = "Hello";

// document.querySelector('.i-14').value =

// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector(".i-15");
y.style.border = "2px solid red";

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

let inputIn161 = document.querySelector(".i-16_1");
let inputIn162 = document.querySelector(".i-16_2");

function t16() {
  document.querySelector(".out-16").innerHTML =
    +inputIn161.value + +inputIn162.value;
}

document.querySelector(".b-16").onclick = t16;

// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

function t17() {
  let t = document.querySelector(".i-17").value;
  t = parseInt(t);

  document.querySelector(".out-17").innerHTML = t;
}

document.querySelector(".b-17").onclick = t17;

// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

function t18() {
  let t = document.querySelector(".i-18").value;
  t = parseFloat(t);

  document.querySelector(".out-18").innerHTML = t;
}

document.querySelector(".b-18").onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

let input191 = document.querySelector(".i-19_1");
let input192 = document.querySelector(".i-19_2");

function t19() {
  document.querySelector(".out-19").innerHTML =
    +input191.value + +input192.value;
}

document.querySelector(".b-19").onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

let inpFirstName = document.querySelector(".first_name");
let inpLastName = document.querySelector(".last_name");
let age = document.querySelector(".age");
let work = document.querySelector(".work");

function t20() {
  document.querySelector(".out-20").innerHTML =
    "Уважаемый, " +
    inpFirstName.value +
    " " +
    inpLastName.value +
    " , ваш возраст " +
    age.value +
    " года, по професси вы " +
    work.value;
}

document.querySelector(".b-20").onclick = t20;
