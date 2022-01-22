"use strict";
/*Наибольший общий делитель на JavaScript
Пусть у нас есть два числа, например, 12 и 18. Давайте найдем наибольший общий делитель (НОД) этих 
чисел.
Делители числа 12 равны 1, 2, 3, 4, 6 и 12 (как вы видите, я указал и "тривиальные" делители: 
единицу и само число). Делители числа 18 равны 1, 2, 3, 6 и 18.
Очевидно, что у наших чисел следующие общие делители: 1, 2, 3 и 6 (фактически здесь мы видим 
пересечение массивов делителей). Самый большой из общих делителей - число 6. Это и есть НОД наших 
чисел.

Задача 1
Реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать два числа и 
возвращать НОД этих двух чисел. При решении задачи старайтесь использовать вспомогательные функции, 
в том числе полученные нами ранее в теоретической части.*/

let result = 0;
let mas = [42, 63]; //массив
let mass1 = [];
let mass2 = [];
let nod = [];
mass1 = getDel(mas[0]);
mass2 = getDel(mas[1]);
nod = getInt(mass1, mass2);
console.log(nod); //выводит массив делителей
console.log(Math.max(...nod)); //выводит максимальное число из группы чисел

function getDel(num) { //принимает число 
	let arr = []; //массив
	for (let i = 1; i <= num; i++) { //перебирает числа в массиве 
		if (num % i == 0) //если число деленное на i не равно 0
			arr.push(i); //добовляет i
	}
	return arr; //возвращает массив
}

function getInt(arr1, arr2) {// принимает 2 массива
	let result = [];
	for (let elem of arr1) { // перебереат элементы в массиве
		if (inArray(elem, arr2)) { //вызывает функцию inArray
			result.push(elem); //добовляет элементы к результату 
		}
	}
	return result; //возвращает результат
}

function inArray(elem, arr) { //принимает елемент и массив
	return arr.indexOf(elem) !== -1; //проверяет равенство приведенных аргументов и возвращает результ
}
/*ответ: массив делителей из приведенных чисел [ 1, 3, 7, 21 ], максимальный делитель из 
приведенных делителей - 21.


/*Задача 2
Положительные целые числа, не имеющие общих делителей, кроме тривиальной единицы, называются 
взаимно простыми. Говоря другими словами, два числа можно назвать взаимно простыми, если их НОД 
равен единице.
Напишите функцию, которая параметрами будет принимать два числа и проверять - взаимно простые 
они или нет.
1. Функция принимает 2 числа.
2. Функция находит делители этих чисел.
3. Функция перебирает чеслители этих чисел.
4. Функция находит общие делители. 
5. Сравнивает их равенство. //true false.*/
console.log(checkOneCommonDivisor(5, 11));
function checkOneCommonDivisor(num1, num2) { //принимает два числа
	let divisors1 = getDivisors(num1);//1
	let divisors2 = getDivisors(num2);//2
	let result = getInt(divisors1, divisors2);
	if (result.length == 1 && result[0] == 1) return true; //если результат равен 1 возвр true 
	return false; //ели не так fslse
}

function getDivisors(num) {//принимает число
	let result = []; //записывают в массив
	for (let i = 1; i <= num; i++) { //перебирают массив
		if (num % i == 0) result.push(i); //если число / на i = 0 добовляет в результат 
	}
	return result; //и возвращает результат
}
function getInt(arr1, arr2) { //принимает два массива
	let result = []; //массив результат
	for (let elem of arr1) { //перебираем массив
		if (inArray(elem, arr2)) { //с помощью функции добовляем елементы в массив
			result.push(elem);
		}
	}
	return result; //возвращаем результат
}

function inArray(elem, arr) { //принимает елемент и массив
	return arr.indexOf(elem) !== -1; //возвращает совпадение элементов не равных -1
}
//ответ True данные числа являються взоимнопростые