"use strict";
/*Разность массивов на JavaScript
Пусть у нас даны два массива:*/
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];
/*Можно заметить, что числа 1, 4 и 5 не присутствуют одновременно в обоих массивах. Такие элементы 
называются разностью массивов.
Давайте функцию getDiff, которая будет находить разность двух массивов.
Я вижу следующий алгоритм: нужно взять первый массив, и проверить каждый его элемент на то, есть 
ли он во втором массиве. Если элемента нету во втором массиве - то его берем в результат.
Затем такую же манипуляцию следует проделать и со вторым массивом.
Объединение подходящих элементов первого массива и второго и будет нашей искомой разностью.
Для решения задачи мне понадобится полученная ранее функция inArray:*/

function inArray(elem, arr) {
	return arr.indexOf(elem) !== -1;
}

//Используя функцию inArray, проделаем описанную операцию с первым массивом:

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];
let result = [];
for (let elem of arr1) {
	if (!inArray(elem, arr2)) {
		result.push(elem);
	}
}
console.log(result); // выведет [1]

//А теперь проделаем описанную операцию со вторым массивом:

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];

let result = [];

for (let elem of arr2) {
	if (!inArray(elem, arr1)) {
		result.push(elem);
	}
}

console.log(result); // выведет [4, 5]

//Объединим обе операции вместе:

function inArray(elem, arr) {
	return arr.indexOf(elem) !== -1;
}

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];
let result = [];

for (let elem of arr1) {
	if (!inArray(elem, arr2)) {
		result.push(elem);
	}
}
for (let elem of arr2) {
	if (!inArray(elem, arr1)) {
		result.push(elem);
	}
}
console.log(result); // выведет [1, 4, 5]

//Оформим решение в виде функции:

function getDiff(arr1, arr2) {
	let result = [];
	for (let elem of arr1) {
		if (!inArray(elem, arr2)) {
			result.push(elem);
		}
	}
	for (let elem of arr2) {
		if (!inArray(elem, arr1)) {
			result.push(elem);
		}
	}
	return result;
}
//Проверим работу функции:
console.log(getDiff([1, 2, 3], [2, 3, 4, 5])); // выведет [1, 4, 5]

/*В общем-то, функция работает, но меня она пока не очень устраивает: легко заметить, что оба наших 
цикла практически одинаковы. А это значит, что мы имеем излишнее дублирование кода. Мало того, что 
дублирующий код занимает много места, так в нем очень легко ошибиться, так как циклы очень похожи.
Поэтому следующим моим шагом будет вынесение избыточного кода в отдельную функцию. Пусть эта 
функция параметрами принимает два массива и возвращает элементы, которые есть в первом массиве, 
но нет во втором.
Назовем эту функцию getFirstDiff:*/

function getFirstDiff(arr1, arr2) {
	// тут будет код функции
}

//Для реализации функции достаточно скопировать в нее наш первый цикл:

function getFirstDiff(arr1, arr2) {
	let result = [];
	for (let elem of arr1) {
		if (!inArray(elem, arr2)) {
			result.push(elem);
		}
	}
	return result;
}

//Проверим работу нашей функции:

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];

console.log(getFirstDiff(arr1, arr2)); // выведет [1]
console.log(getFirstDiff(arr2, arr1)); // выведет [4, 5]

//Исправим нашу функцию getDiff:

function getDiff(arr1, arr2) {
	let result = [];
	result = result.concat(getFirstDiff(arr1, arr2));
	result = result.concat(getFirstDiff(arr2, arr1));
	return result;
}

/*Как вы видите, теперь функция getDiff стала компактной и очевидной.
Можно переписать ее чуть короче:*/

function getDiff(arr1, arr2) {
	let diff1 = getFirstDiff(arr1, arr2);
	let diff2 = getFirstDiff(arr2, arr1);
	return [].concat(diff1, diff2);
}

//Окончательный код будет выглядеть следующим образом:

function getDiff(arr1, arr2) {
	let diff1 = getFirstDiff(arr1, arr2);
	let diff2 = getFirstDiff(arr2, arr1);
	return [].concat(diff1, diff2);
}
function getFirstDiff(arr1, arr2) {
	let result = [];
	for (let elem of arr1) {
		if (!inArray(elem, arr2)) {
			result.push(elem);
		}
	}
	return result;
}
function inArray(elem, arr) {
	return arr.indexOf(elem) !== -1;
}
//Проверим работу функции:
console.log(getDiff([1, 2, 3], [2, 3, 4, 5])); // выведет [1, 4, 5]

/*Задача 1
Самостоятельно, не подсматривая в мой код, повторите решение описанной задачи.*/

function getDiff(arr1, arr2) {
	let diff1 = getFirstDiff(arr1, arr2);
	let diff2 = getFirstDiff(arr2, arr1);
	return [].concat(diff1, diff2);
}
function getFirstDiff(arr1, arr2) {
	let result = [];
	for (let elem of arr1) {
		if (!inArray(elem, arr2)) {
			result.push(elem);
		}
	}
	return result;
}
function inArray(elem, arr) {
	return arr.indexOf(elem) !== -1;
}
console.log(getDiff([1, 2, 3], [2, 3, 4, 5]));//[ 1, 4, 5 ]