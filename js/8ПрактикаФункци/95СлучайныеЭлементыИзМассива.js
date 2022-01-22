"use strict";
/*Случайный элемент из массива на JavaScript
Реализуем функцию, возвращающую случайный элемент из массива.
Для этого нам понадобится функция, возвращающая случайное целое значение в заданном диапазоне:*/
function getRandomInt(min, max) {//принимает диапазон чисел
	return Math.floor(Math.random() * (max - min + 1)) + min;/*возвращает Math.floor((округление 
		до целого)Math.random(возвращает случайное дробное число) * (мин - макс +1) +мин)*/
}
/*С помощью этой функции будем генерировать ключ случайного элемента массива. Для этого будем 
генерировать случайное число от 0 до ключа последнего элемента массива:*/

let arr = [1, 2, 3, 4, 5];//некий массив

let key = getRandomInt(0, arr.length - 1); //находит число в длинне массива -1
console.log(key); //выаодит этот элемент 
// Соберем наш код в функцию:

function random(arr) { //функция принимает массив
	let key = getRandomInt(0, arr.length - 1); //находит случайный ключ в длинне массива -1 
	return arr[key]; //возвращает ключ массива
}
// Упростим:

function getRandomInt(min, max) {//принимает диапазон чисел
	return Math.floor(Math.random() * (max - min + 1)) + min;/*возвращает Math.floor((округление 
		до целого)Math.random(возвращает случайное дробное число) * (мин - макс +1) +мин)*/
}

function random(arr) { //принимает массив
	return arr[getRandomInt(0, arr.length - 1)]; // возвращает массив функции getRandomInt
}
// Потестируем:
let arr = [1, 2, 3, 4, 5];
console.log(random(arr)); //2

/*Задача 1
Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию. При решении задачи код 
функции getRandomInt скопируйте из учебника.*/
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function random(arr) {
	return arr[getRandomInt(0, arr.length - 1)];
}
// console.log(random([2, 3, 4, 5, 6]));//undefined потому как не был обозначен массив
let arr = [1, 2, 3, 4, 5];
console.log(random(arr));//3

/*Задача 2
Используя созданную функцию, найдите сумму трех случайных элементов из массива.*/
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function random(arr) {
	return arr[getRandomInt(0, arr.length - 1)];
}
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < 4; i++) {
	sum += random(arr);
}
console.log(random(arr));//рандомное число
console.log(sum); //сумма рандомных чисел


/////////////////////////////

let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < 4; i++) {
	sum += random(arr);
}
console.log(sum);
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function random(arr) {
	return arr[getRandomInt(0, arr.length - 1)];
}


// console.log(5>4);//true
// console.log("ананас" > "яблоко") //false
// console.log("2" > "12") //true сравнивается тип
// console.log(undefined == null) //true
// console.log(undefined === null)//false строгое сравнение
// console.log(null == "\n0\n")// false
// console.log(null === +"\n0\n")//false