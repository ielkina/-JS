"use strict";
/*Перемешивание массива на JavaScript
Реализуем функцию shuffle, параметром принимающую массив и перемешивающую его элементы в случайном 
порядке.
Давайте рассмотрим алгоритм решения данной задачи.
Я предлагаю следующее: запустим цикл и в каждой итерации будем вырезать случайный элемент массива и 
записывать его в новый массив. Будем повторять пока элементы не закончатся. Полученный новый массив 
и будет содержать элементы старого массива в случайном порядке.
Для реализации описанного нам понадобится функция, возвращающая случайное целое число в заданном 
диапазоне:*/

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*Давайте попробуем с помощью приведенной выше функции вырезать элементы массива в случайном 
порядке. Пусть у нас есть массив: Вырежем из него один случайный элемент, используя метод splice:*/
let arr = [1, 2, 3, 4, 5];
let random = getRandomInt(0, arr.length - 1);
let elem = arr.splice(random, 1);//отрезает рандомно часть массива
console.log(elem);//выводит массив элемент

/*Здесь, однако, нас ждет подвох: метод splice возвращает массив элементов и в нашем случае 
это будет массив, состоящий из одного нашего элемента. А мы хотели бы не массив, а сам элемент.
Поправим проблему:*/

let arr = [1, 2, 3, 4, 5];
let random = getRandomInt(0, arr.length - 1);
let elems = arr.splice(random, 1);
let elem = elems[0];
console.log(elem);//выводит элемент

// Перепишем в более компактном виде:

let arr = [1, 2, 3, 4, 5];

let random = getRandomInt(0, arr.length - 1);
let elem = arr.splice(random, 1)[0];
console.log(elem);

/*Вспомним теперь то, как работает splice - он вырезает элемент из массива, при этом изменяя сам 
массив. В нашем случае это замечательно, так нам нужно вырезать элементы массива так, чтобы они 
не дублировались. В этом случае поведение splice - это то, что нам нужно: уже вырезанный элемент 
не будет вырезан снова.
Кроме того, есть еще один положительный момент в работе splice. Суть в следующем: когда мы будем 
вырезать элемент второй раз, логично, что нам нужно генерировать случайное число в диапазоне до 
arr.length-2, а в третий раз - до arr.length-3 и так далее.
Однако splice изменяет массив, а значит и длину массива. Это значит, что arr.length-1 после 
каждого вырезания будет становится на единицу меньше, как нам и надо!
Давайте с учетом вышесказанного вырежем все элементы массива:*/

let arr = [1, 2, 3, 4, 5];
let random, elem;

random = getRandomInt(0, arr.length - 1); // здесь в arr.length лежит 5
elem = arr.splice(random, 1)[0];
console.log(elem);

random = getRandomInt(0, arr.length - 1); // здесь в arr.length лежит 4
elem = arr.splice(random, 1)[0];
console.log(elem);

random = getRandomInt(0, arr.length - 1); // здесь в arr.length лежит 3
elem = arr.splice(random, 1)[0];
console.log(elem);

random = getRandomInt(0, arr.length - 1); // здесь в arr.length лежит 2
elem = arr.splice(random, 1)[0];
console.log(elem);

random = getRandomInt(0, arr.length - 1); // здесь в arr.length лежит 1
elem = arr.splice(random, 1)[0];
console.log(elem);

// Преобразуем приведенный выше код в цикл:

let arr = [1, 2, 3, 4, 5];
while (arr.length > 0) {
	let random = getRandomInt(0, arr.length - 1);
	let elem = arr.splice(random, 1)[0];
	console.log(elem);
}

// Будем теперь вырезанные элементы записывать в новый массив:

let arr = [1, 2, 3, 4, 5];
let result = [];
while (arr.length > 0) {
	let random = getRandomInt(0, arr.length - 1);
	let elem = arr.splice(random, 1)[0];
	result.push(elem);
}
console.log(result);

// Соберем все вместе и получим решение нашей задачи:

function shuffle(arr) {
	let result = [];
	while (arr.length > 0) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}
	return result;
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(shuffle([1, 2, 3, 4, 5]));//[ 5, 1, 2, 3, 4 ]

/*Задача 1
Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию. При решении задачи код 
функции getRandomInt скопируйте из учебника.*/
function shuffle(arr) {
	let result = [];
	while (arr.length > 0) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}
	return result;
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(shuffle([5, 9, 8, 7, 5, 6, 3, 4, 5]));//[3, 6, 9, 5, 5, 7, 4, 8, 5]

/*Задача 2
Сделайте функцию range принимающую параметрами 2 целых числа - начало и конец диапазона, и 
возвращающую массив, заполненный целыми числами из этого диапазона.
1.Функция принимает 2 целых числа(max,min)
2.Функция возвращает массив с целыми числами из (min,max)*/
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function range(num1, num2) {
	let result = [];
	for (let i = num1; i <= num2; i++) {
		result.push(getRandomInt(num1, num2));
	}
	return result;
}
console.log(range(1, 10));


/*Задача 3
Сделайте функцию rangeRand, возвращающую массив, заполненный случайными целыми числами из 
заданного диапазона. При этом числа не должны повторяться. Для решения задачи используйте 
комбинацию функций range и shuffle.*/
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function rangeRand(num1, num2) {
	let result = [];
	for (let i = num1; i <= num2; i++) {
		result.push(i);
	}
	return shuffle(result);
}
function shuffle(arr) {
	let result = [];
	while (arr.length > 0) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}
	return result;
}
console.log(rangeRand(1, 10));