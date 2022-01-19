"use strict";
/*Логические операторы без if в функциях JavaScript
Пусть у нас есть функция с ифом. Вот она:*/

function func(a, b) {
	if (a > b) {
		return true;
	} else {
		return false;
	}
}

/*Как вы уже знаете из предыдущих уроков, конструкции if, возвращающие булевы значения, 
можно переписывать в сокращенной форме. Давайте сделаем это:*/

function func(a, b) {
	return a > b;
}

/*Задача 1
Дана следующая функция:*/

function func(a, b) {
	if (a == b) {
		return true;
	} else {
		return false;
	}
}
/*Перепишите ее код в сокращенной форме согласно изученной теории.*/
function func(a, b) {
	return a == b;
}
console.log(func(2, 5));

/*Задача 2
Дана следующая функция:*/

function func(a, b) {
	if (a != b) {
		return true;
	} else {
		return false;
	}
}
//Перепишите ее код в сокращенной форме согласно изученной теории.
function func(a, b) {
	return a != b;
}
console.log(func(2, 2));

/*Задача 3
Дана следующая функция:*/

function func(a, b) {
	if (a + b >= 10) {
		return true;
	} else {
		return false;
	}
}
//Перепишите ее код в сокращенной форме согласно изученной теории.
function func(a, b) {
	return a + b >= 10;
}
console.log(func(1, 9));

/*Задача 4
Дана следующая функция:*/

function func(num) {
	if (num >= 0) {
		return true;
	} else {
		return false;
	}
}
//Перепишите ее код в сокращенной форме согласно изученной теории.
function func(num) {
	return num >= 0;
}
console.log(func(0));