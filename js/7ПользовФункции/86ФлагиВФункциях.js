"use strict";
/*Флаги в функциях JavaScript
Пусть у нас есть код, проверяющий число на простоту:*/
let num = 31;
let flag = true;
for (let i = 2; i < num; i++) {
	if (num % i == 0) {
		flag = false;
		break;
	}
}
console.log(flag);//true
//Давайте оформим этот код в виде функции:
function isPrime(num) {
	let flag = true;
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			flag = false;
			break;
		}
	}
	return flag;
}
//Проверим работу нашей функции:
console.log(isPrime(10));//false
console.log(isPrime(31));//true

/*Давайте теперь посмотрим, как можно упростить работу с флагами, если мы используем их в функции. 
На самом деле в случае с функцией переменная flag и команда break нам не понадобятся - вместо них 
все сделает команда return.
Делается это следующим образом: внутри функции запускаем наш цикл с ифом и, если мы попали в 
иф - возвращаем false, тем самым выходя из цикла и из функции. А если цикл прокрутился, но выхода 
из функции не случилось - после цикла возвращаем true:*/

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	return true;
}

/*Еще раз как это работает: если в массиве найдется нужный элемент - мы выйдем из функции (и из 
цикла тоже) с помощью return. Но если в массиве не найдется нужный элемент - выхода из функции 
не произойдет и выполнение дойдет до команды return true. И получится, что функция вернет true 
в знак того, что число простое.

Проверка по массиву
Давайте теперь сделаем функцию, которая параметром будет принимать массив, и проверять, что 
все элементы в этом массиве положительные. Пусть функция возвращает true, если это так, и false, 
если хотя бы один из элементов массива отрицательный.
Вот примеры того, как должна работать наша функция:*/

console.log(isPositive([1, -2, 3, 4, -5])); // выведет false
console.log(isPositive([1, 2, 3, 4, 5]));   // выведет true

//Реализуем описанную функцию с помощью неявного использования флагов:

function isPositive(arr) {
	for (let elem of arr) {
		if (elem < 0) {
			return false;
		}
	}
	return true;
}

/*Задача 1
Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все 
элементы в этом массиве являются четными числами.*/

function even(arr) {
	for (let elem of arr) {
		if (elem % 2 != 0) {
			return false;
		}
	}
	return true;
}
console.log(even([2, 6, 8, 6]));//true
console.log(even([1, 5, 8, 9, 2, 6, 7, 4, 5, 6]));//false

// function IsEven(arr) {
// 	for (let elem of arr) {
// 		if (elem % 2 != 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
// console.log(IsEven([5, 4, 6, 9, 15, 2]));//false
// console.log(IsEven([2, 4, 8, 10, 16, 2]));//true

/*Задача 2
Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа 
являются нечетными.*/

function notEven(num) {
	num = String(num);
	for (let elem of num) {
		if (Number(elem) % 2 == 0) {
			return false;
		}
	}
	return true;
}
console.log(notEven(86));//false
console.log(notEven(57));//true

/*Задача 3
1.Сделайте функцию, 
2.которая параметром будет принимать массив 
3.и проверять, есть ли в этом массиве два одинаковых элемента подряд.*/

function doubleNumber(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (i < arr.length - 1) {
			if (arr[i] == arr[i + 1]) {
				return true;
			}
		}
	}
	return false;
}
console.log(doubleNumber([1, 1, 2, 3, 3, 5, 5]));//true
console.log(doubleNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));//false

// function TwoElem(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (i < arr.length - 1) {
// 			if (arr[i] == arr[i + 1]) {
// 				return true;
// 			}
// 		}
// 	}
// 	return false;
// }
// alert(TwoElem([1, 2, 3, 3, 5]));
// alert(TwoElem([1, 2, 3, 6, 5, 8, 7, 3, 2]));