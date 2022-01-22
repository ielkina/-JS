"use strict";
/*Случайные элементы из массива на JavaScript
Давайте теперь реализуем функцию randoms, возвращающую заданное количество случайных элементов 
из массива. Пусть первым параметром функция принимает массив, а вторым - количество элементов, 
которое следует вернуть.
Для решения задачи можно использовать функцию random, созданную нами в предыдущих уроках, 
вот так:*/
function getRandomInt(min, max) {//принимает диапазон чисел
	return Math.floor(Math.random() * (max - min + 1)) + min;/*возвращает Math.floor((округление 
		до целого)Math.random(возвращает случайное дробное число) * (мин - макс +1) +мин)*/
}
function random(arr) { //функция принимает массив
	let key = getRandomInt(0, arr.length - 1); //находит случайный ключ в длинне массива -1 
	return arr[key]; //возвращает ключ массива
}
function randoms(arr, length) { //принимает массив и кол элементов которое нужно вернуть 
	let result = [];
	for (let i = 0; i < length; i++) {
		result.push(random(arr)); // используем функцию random
	}
	return result;
}
console.log(randoms([1, 2, 3, 4, 5], 3));

/*Это, однако, плохое решение, так как один и тот же элемент массива может быть получен несколько 
раз. Следует полагать, что это не то, что мы ожидаем от нашей функции.
Давайте лучше перемешаем наш массив с помощью ранее созданной нами функции shuffle, а потом 
возьмем первые length элементов перемешенного массива.
Для решения описанной задачи было бы неплохо иметь следующую функцию first, получающую 
первые элементы массива:*/

function first(arr, length) {
	// код мы напишем позже
}
console.log(first([1, 2, 3, 4, 5], 3)); // выведет [1, 2, 3]

// При наличии такой функции first мы сможем решить поставленную задачу следующим образом:

function shuffle(arr) {
	let result = [];
	while (arr.length > 0) {
		let random = getRandomInt(0, arr.length - 1);
		let elem = arr.splice(random, 1)[0];
		result.push(elem);
	}
	return result;
}
function randoms(arr, length) {
	return first(shuffle(arr), length);
}
console.log(randoms([1, 2, 3, 4, 5], 3));

// Реализуем теперь функцию first:

function first(arr, length) {
	return arr.slice(0, length);
}

// Обязательно потестируем созданную функцию:

console.log(first([1, 2, 3, 4, 5], 3)); // выведет [1, 2, 3]

// Соберем весь код вместе (с кодом функции shuffle) и получим итоговое решение нашей задачи:
////////
function randoms(arr, length) {
	return first(shuffle(arr), length);
}
function first(arr, length) {
	return arr.slice(0, length);
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
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randoms([1, 2, 3, 4, 5], 3));

/*Обязательно потестируем созданную функцию randoms (каждый запуск приведенного ниже кода должен 
выдавать 3 случайных неповторяющихся элемента):*/



/*Задача 1
Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию. При решении задачи код 
функций getRandomInt и shuffle скопируйте из учебника.*/

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
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
function randoms(arr, length) {
	return first(shuffle(arr), length);
}
function first(arr, length) {
	return arr.slice(0, length);
}
console.log(randoms([1, 2, 3, 4, 5], 6));//все равно выведит 5 элементов потому как в массиве нет 6



