"use strict";
/*Примеры на создание функций в JavaScript
В этом уроке мы с вами будем отрабатывать полученные ранее знания по пользовательским функциям 
на практических задачах.
Пусть у нас дан какой-то произвольный массив с числами, например, такой:*/

let arr = [1, 2, 3, 4];

/*Пусть теперь перед нами, к примеру, стоит задача найти сумму элементов этого массива.
Пока не будем использовать пользовательские функции, чтобы показать, какие проблемы возникнут
в этом случае. Давайте напишем код, реализующий нашу задачу:*/

let arr = [1, 2, 3, 4];
// Код, находящий сумму:
let sum = 0;

for (let elem of arr) {
	sum += elem;
}

console.log(sum);//10

//Пусть теперь у нас даны два массива:

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];

/*Пусть теперь перед нами стоит задача найти сумму элементов и одного массива, и второго. 
В этом случае нам придется код, находящий сумму, повторить два раза: для первого и для второго 
массива, вот так:*/

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
// Код, находящий сумму первого массива:
let sum1 = 0;

for (let elem of arr1) {
	sum1 += elem;
}
// Код, находящий сумму второго массива:
let sum2 = 0;

for (let elem of arr2) {
	sum2 += elem;
}
// Код, выводящий найденные суммы:
console.log(sum1);
console.log(sum2);

/*Как мы видим, у нас возникает дублирование кода. Давайте избавимся от него, создав свою функцию, 
находящую сумму элементов переданного параметром массива. Вот код этой функции:*/

function getSum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}
//Используем теперь нашу функцию для нахождения суммы одного и второго массива:
function getSum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
console.log(getSum(arr1));
console.log(getSum(arr2));

/*Задача 1
Напишите функцию, которая будет находить сумму квадратов элементов массива.*/
function getSumSqr(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += Math.sqrt(elem);
	}
	return sum;
}
let arr = [1, 2, 3, 4, 5];
console.log(getSumSqr(arr));//8.382332347441762

/*Задача 2
Сделайте функцию getDigitsSum, которая параметром будет принимать целое число и возвращать 
сумму его цифр.*/
function getDigitsSum(num) {
	let sum = 0;
	num = String(num);
	for (let i = 0; i < num.length; i++) {
		sum += Number(num[i]);
	}
	return sum;
}
console.log(getDigitsSum(56789));//35

// function getDigitsSum(num) {
// 	let sum = 0;
// 	num = String(num);
// 	for (let i = 0; i < num.length; i++) {
// 		sum += Number(num[i]);
// 	}
// 	return sum;
// }
// alert(getDigitsSum(1235));

/*Задача 3
Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив 
его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 
24 - мы должны получить следующий массив: [1, 2, 3, 4, 6, 8, 12, 24];*/

function getDivisors(num) { let arr = []; for (let i = 0; i <= num; i++) { if (num % i == 0) { arr.push(i); } } return arr; }
console.log(getDivisors(24));//[	1, 2,  3,  4,	6, 8, 12, 24 ]

/*Задача 4
Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее 
символы в обратном порядке.Решите задачу без цикла, используя комбинацию стандартных функций 
JavaScript.*/
function reverseStr(str) { let result = str.split(' ').reverse().join(' '); return result; }
console.log(reverseStr('переставь слова в строке'));//строке в слова переставь

// let str = 'переставить слова в строке';
// let result = str.split(' ').reverse().join(' ');
// console.log(result);

/*Задача 5
Сделайте функцию delElem, которая параметрами будет принимать значение и массив и 
удалять из массива все элементы с таким значением.*/
function delElem(arr, elem) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == elem) {
			arr.splice(i, 1);
		}
	}
	return arr;
}
console.log(delElem([1, 5, 4, 7, 8, 9], 5));//[ 1, 4, 7, 8, 9 ]

// function delElem(arr, elem) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] == elem) arr.splice(i, 1);
// 	}
// 	return arr;
// }
// console.log(delElem([3, 5, 2, 6, 4, 2, 8, 7, 2], 2));

/*Задача 6
Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.Пример работы такой функции:*/
function fillArr(num) {
	let arr = [];
	for (let i = 0; i < num; i++) {
		arr[i] = i + 1;
	}
	return arr;
}
console.log(fillArr(5)); // выведет [1, 2, 3, 4, 5]


/*Задача 7
Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел.
Пример работы такой функции:*/

console.log(func(3, 7)); // выведет [3, 4, 5, 6, 7]