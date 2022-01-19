"use strict";
/*Правильное использование функций JavaScript
Пусть у нас дан вот такой массив с четырехзначными числами:*/
// let arr = [1524, 1321, 4563, 7144, 2879];
/*Давайте запишем в новый массив только те элементы, сумма первых двух цифр в которых равна 
сумме вторых двух цифр.
Очевидно, что для решения задачи необходимо перебирать циклом наш массив и проверять каждый элемент.
Давайте вынесем проверку в отдельную функцию, назвав ее checkDigitsPairsSum (проверить суммы пар 
цифр). Пусть эта функция параметром принимает четырехзначное число и проверяет суммы пар цифр. 
Если суммы равны, пусть функция возвращает true, а если не равны - false.
Не будем пока реализовывать функцию checkDigitsPairsSum, а будем писать дальнейший код так, как 
будто у нас уже есть эта функция, а затем ее реализуем.
Итак, если бы у нас была функция checkDigitsPairsSum, мы бы легко решили поставленную задачу вот 
так:*/
let result = [];
let arr = [1524, 1321, 4563, 7144, 2879];
for (let elem of arr) {
	if (checkDigitsPairsSum(elem)) { // используем нашу функцию
		result.push(elem);
	}
}
console.log(result);
//Напишем теперь реализацию нашей функции:

function checkDigitsPairsSum(num) {
	let str = String(num);
	let sum1 = Number(str[0]) + Number(str[1]);
	let sum2 = Number(str[2]) + Number(str[3]);
	if (sum1 == sum2) {
		return true;
	} else {
		return false;
	}
}

//Упростим код функции, используя вместо конструкции if простой оператор ==:

function checkDigitsPairsSum(num) {
	let str = String(num);
	let sum1 = Number(str[0]) + Number(str[1]);
	let sum2 = Number(str[2]) + Number(str[3]);

	return sum1 == sum2;
}

//Окончательный код будет выглядеть так:

let result = [];
let arr = [1524, 1321, 4563, 7144, 2879];
for (let elem of arr) {
	if (checkDigitsPairsSum(elem)) {
		result.push(elem);
	}
}
console.log(result);
function checkDigitsPairsSum(num) {
	let str = String(num);
	let sum1 = Number(str[0]) + Number(str[1]);
	let sum2 = Number(str[2]) + Number(str[3]);
	return sum1 == sum2;
}

/*Преимущества
Давайте теперь разберем, что же нам дало вынесение проверки в отдельную функцию.
Во-первых, наш код стал более понятным и очевидным. Для того, чтобы понять, что имеется ввиду, 
посмотрите на следующий цикл:*/

for (let elem of arr) {
	if (checkDigitsPairsSum(elem)) {
		result.push(elem);
	}
}

/*При чтении кода сразу становится более - менее понятно, что именно проверяется в условии - 
находится и проверяется какая - то сумма пар чисел.
Очевидность нашего кода достигается удачно подобранным названием функции.Представьте себе, что 
мы бы назвали нашу функцию просто func:*/

for (let elem of arr) {
	if (func(elem)) {
		result.push(elem);
	}
}

/*Как вы видите, код теперь далеко не такой очевидный! Понадобится детально изучить код функции 
func, чтобы понять, что же она такое делает.
Для сравнения давайте напишем наш цикл вообще без использования функции:*/

let result = [];
let arr = [1524, 1321, 4563, 7144, 2879];
for (let elem of arr) {
	let str = String(elem);
	let sum1 = Number(str[0]) + Number(str[1]);
	let sum2 = Number(str[2]) + Number(str[3]);
	if (sum1 == sum2) {
		result.push(elem);
	}
}
console.log(result);

/*Как вы видите, теперь код менее компактный и требует изучения, для того, чтобы понять, что в нем 
происходит.
Кроме того, из - за своего объема данный код больше подвержен ошибкам, а самое главное - его части 
нельзя потестировать отдельно.
Поясню, что имеется ввиду.Пусть вы разработали нужную нам функцию checkDigitsPairsSum:*/

function checkDigitsPairsSum(num) {
	let str = String(num);
	let sum1 = Number(str[0]) + Number(str[1]);
	let sum2 = Number(str[2]) + Number(str[3]);

	return sum1 == sum2;
}

/*Лучше не пытаться сразу же использовать функцию в задаче, а сначала проверить то, что она 
работает правильно.

Проверим:*/

console.log(checkDigitsPairsSum(1524)); // выведет true
console.log(checkDigitsPairsSum(1525)); // выведет false

//Вот теперь, после проверки, мы уверены в нашей функции, и можем спокойно использовать ее в цикле:

for (let elem of arr) {
	if (checkDigitsPairsSum(elem)) {
		result.push(elem);
	}
}

//А теперь опять посмотрим на наш большой код без функции:

for (let elem of arr) {
	let str = String(elem);
	let sum1 = Number(str[0]) + Number(str[1]);
	let sum2 = Number(str[2]) + Number(str[3]);

	if (sum1 == sum2) {
		result.push(elem);
	}
}

/*В этом коде проблематично отдельно потестировать код проверки.И придется тестировать весь код 
на предмет того, решает ли он поставленную задачу или нет.
И, чем сложнее задача, тем больше существует мест, где вы могли ошибиться, и, соответственно, 
если писать достаточно большой код без функций, то впоследствии очень тяжело будет найти, 
в чем же была ошибка, особенно если она была не одна.
Выводы: достаточно большой код следует разбивать на функции, при этом функциям нужно давать 
удачные, понятные имена.

Практические задачи

Задача 1

Дана функция, проверяющая числа на простоту:*/

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}
let result = [];
for (let i = 1; i <= 100; i++) {
	if (isPrime(i)) result.push(i);
}
console.log(result);
//С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.

/*Задача 2
Дана функция getDigitsSum, которая параметром принимает целое число и возвращает сумму его цифр:
С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых 
равна 13.*/

function getDigitsSum(num) {
	let sum = 0;
	let digits = String(num).split('');

	for (let digit of digits) {
		sum += Number(digit);
	}

	return sum;
}

let result = [];
for (let i = 1; i <= 2020; i++) {
	if (getDigitsSum(i) == 13) result.push(i);
}
console.log(result);

/*Задача 3
Пусть дан какой - то массив с числами, например, такой: [123, 456, 789]
Давайте сделаем так, чтобы цифры в каждом элементе массива были в обратном порядке.То есть из 
нашего массива сделаем следующий: [321, 654, 987]
Некий программист уже написал код, реализующий описанную задачу:
Переделайте приведенный код так, чтобы переворот числа выполняла отдельная функция.*/

/*let nums = [123, 456, 789];
let result = [];
for (let num of nums) {
	result.push(String(num).split('').reverse().join(''));
}
console.log(result); // выведет [321, 654, 987]*/



function reversNumArr(num) {
	return String(num).split('').reverse().join('');
}
let nums = [123, 456, 789];
let result = [];
for (let num of nums) {
	result.push(reversNumArr(num));
}
console.log(result); // выведет [321, 654, 987]

/*Задача 4
Даны два числа.Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа.
Некий программист уже написал решение задачи, вот оно:
В чем недостатки приведенного кода ? Переделайте код так, чтобы он был более удачным.*/

// let num1 = 234;
// let num2 = 531;

function sumNum(num1, num2) {
	let digits1 = String(num1).split('');
	let digitsSum1 = 0;
	for (let digit1 of digits1) {
		digitsSum1 += Number(digit1);
	}
	let digits2 = String(num2).split('');
	let digitsSum2 = 0;
	for (let digit2 of digits2) {
		digitsSum2 += Number(digit2);
	}
	return digitsSum1 == digitsSum2;
}
let num1 = 234;
let num2 = 531;
if (sumNum(num1, num2)) {
	console.log('суммы цифр совпадают');
} else {
	console.log('суммы цифр не совпадают');
}

/*Задача 5
Дан массив с числами.Необходимо перебрать этот массив с числами и вывести в консоль нетривиальные 
делители этих чисел(то есть исключая число 1 и само число).Некий программист уже написал решение 
задачи:
Программист не тестировал отдельно работу функции getDivisors, а написал весь код сразу и затем 
запустил его.При запуске оказалось, что код работает как - то не так.Видимо, в функции getDivisors 
была допущена какая - то ошибка.
Найдите и исправьте ошибку.Потестируйте отдельно функцию getDivisors, чтобы убедиться, что она 
работает корректно после вашей правки.После того, как вы убедитесь в корректности работы функции 
- проверьте полный код решения задачи.*/

let nums = [12, 24, 35, 14];
for (let num of nums) {
	console.log(num + ': ' + getDivisors(num).join(', '));
}
function getDivisors(num) {
	let result = [];
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			result.push(i);
		}
	}
	return result;
}
// 12: 2, 3, 4, 6
// 24: 2, 3, 4, 6, 8, 12
// 35: 5, 7
// 14: 2, 7