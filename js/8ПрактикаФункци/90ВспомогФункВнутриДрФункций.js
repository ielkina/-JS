"use strict";
/*Вспомогательные функции внутри других функций в JavaScript
В данном уроке я покажу вам, как решать более сложные задачи, используя комбинации вспомогательных 
функций. Давайте рассмотрим условие задачи.
Пусть у нас дан массив с числами. Решим следующую задачу: запишем в новый массив только те элементы,
сумма цифр в которых от 1 до 9.
Я начну решение с разработки вспомогательной функции getDigits (digit - цифра), 
которая параметром будет принимать число, а возвращать массив цифр. Вот эта функция:*/

function getDigits(num) {
	let str = String(num);
	return str.split('');
}
//Этот код можно переписать короче в одну строчку:
function getDigits(num) {//принимает число
	return String(num).split(''); //возвращает (строку) елемент массива
}
//Давайте потестируем нашу функцию на каком-нибудь числе:
console.log(getDigits(123)); // выведет ['1', '2', '3']

/*Обратите внимание на то, что функция вернула массив строк, а не массив чисел. 
Это результат работы split. Давайте здесь с этим ничего не будем делать, а просто учтем в 
дальнейшем.
Следующая функция, которую я хотел бы написать - это функция getSum, параметром принимающая 
массив и возвращающая сумму элементов этого массива. Пусть эта функция работает и с массивом 
чисел, и с массивом строк. Мы достигнем этого с помощью функции Number, в которую мы обернем 
элементы нашего массива:*/

function getSum(arr) { //приммает массив
	let sum = 0;
	for (let elem of arr) {
		sum += Number(elem);
	}
	return sum; //возвращает сумму элементов массива
}
//Давайте потестируем комбинацию наших двух функций - найдем сумму цифр заданного числа:
let sum = getSum(getDigits(123));
console.log(sum); // выведет 6

/*Следующая функция, которую мне хотелось бы иметь - это функция inRange, которая параметром 
принимает число и возвращает true, если сумма цифр этого числа от 1 до 9, и false - если это не 
так.Вот эта функция:*/

function inRange(num) {//параметром принимает число
	let sum = getSum(getDigits(num)); // используем вспомогательные функции
	if (sum >= 1 && sum <= 9) {//возвращает тру если сумма цифр от 1 до 9
		return true;
	} else {
		return false;
	}
}
//Можно переписать функцию inRange в более короткой форме:
function inRange(num) {
	let sum = getSum(getDigits(num));
	return sum >= 1 && sum <= 9;
}
/*Давайте теперь решим нашу исходную задачу.
Напомню ее: дан массив с числами, запишем в новый массив только те элементы, сумма цифр 
в которых от 1 до 9.
Для этого возьмем массив с числами, переберем его циклом и в цикле с помощью нашей функции 
inRange будем проверять, подходит ли нам этот элемент массива. Если подходит - забираем его себе:*/
let arr = [12, 19, 28, 13, 14, 345];
let result = [];
for (let elem of arr) {
	if (inRange(elem)) { // если подходит - берем
		result.push(elem);
	}
}
console.log(result);

//Окончательное решение будет выглядеть так:

let arr = [12, 19, 28, 13, 14, 345];
let result = [];
function inRange(num) {
	let sum = getSum(getDigits(num));
	return sum >= 1 && sum <= 9;
}
function getSum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += Number(elem);
	}
	return sum;
}
function getDigits(num) {
	return String(num).split('');
}
for (let elem of arr) {
	if (inRange(elem)) {
		result.push(elem);
	}
}
console.log(result);
/*Задача 1
Самостоятельно, не подсматривая в мой код, повторите решение описанной задачи.*/
let arr = [12, 19, 28, 13, 14, 345];
let result = [];
function inRange(num) {
	let sum = getSum(getDigits(num));
	return sum >= 1 && sum <= 9;
}
function getSum(arr) {
	let sum = 0;
	for (let elem of arr) {
		sum += Number(elem);
	}
	return sum;
}
function getDigits(num) {
	return String(num).split('');
}
for (let elem of arr) {
	if (inRange(elem)) {
		result.push(elem);
	}
}
console.log(result);