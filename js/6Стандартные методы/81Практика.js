"use strict";
/*Практика на использования изученных методов
Регистр символов
Пусть у нас есть некоторая переменная с текстом:*/
let str = 'london';
/*Давайте преобразуем первую букву этой строки в верхний регистр:*/
let str = 'london';
let result = str.slice(0, 1).toUpperCase() + str.slice(1);
console.log(result); // выведет 'London'

/*Задача 1 
Преобразуйте последнюю букву строки в верхний регистр.*/
let str = 'london';
// let result = str.slice(-1);
// let upp = str.toUpperCase();
// let result1 = str.slice(0, -1);
// let sum = str.slice(0, -1) + str.slice(-1).toUpperCase();
let result = str.slice(0, -1) + str.slice(-1).toUpperCase;
console.log(result);

/*Задача 2
Преобразуйте первые 2 буквы строки в верхний регистр.*/
let str = 'london';
let result = str.slice(0, 2).toUpperCase() + str.slice(2);
console.log(result);

/*Задача 3
Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:
let str = 'London';
Преобразуйте первую букву строки в нижний регистр.*/
let str = 'London';
let result = str.slice(0, 1).toLowerCase() + str.slice(1);
console.log(result);

/*Слова в строке
Пусть у нас есть некоторая переменная с текстом, состоящим из нескольких слов:*/
let str = 'word1 word2 word3';
/*Давайте напишем код, который преобразует первую букву каждого слова в верхний
регистр. Сразу приведу решение с комментариями:*/
let str = 'word1 word2 word3'; // Разобьем строку в массив слов:
let words = str.split(' ');
for (let i = 0; i < words.length; i++) {
	// Увеличим регистр каждого слова:
	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
} // Сольем массив обратно в строку:
let result = words.join(' ');
console.log(result); // выведет 'Word1 Word2 Word3'

/*Задача 4
Самостоятельно, не подсматривая в мой код, повторите мое решение описанной задачи.*/
let str = 'нужно увеличить первую букву каждого слова';
let words = str.split(' ');
for (let i = 0; i < words.length; i++) {
	words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}
let result = words.join(' ');
console.log(result);

/*Задача 5
Преобразуйте строку 'var_test_text'
в 'VarTestText'.
Написанный код должен работать для любых строк такого типа(то есть для строк, в которых 
слова разделены символов подчеркивания).*/
/*Задача 6 
Модифицируйте предыдущую задачу так, чтобы первая буква новой строки была в нижнем регистре.*/

let str = 'var_test_text';
let arr = str.split('_');
for (i = 0; i < arr.length; i++) {
	arr[i] = arr[i].substr(0, 1).toUpperCase() + arr[i].substr(1)
}
let result = arr.join('');
let str1 = result.toLowerCase();
console.log(result); //VarTestText
console.log(str1); //vartesttext

/*Переворот строки
Пусть у нас есть некоторая переменная со строкой:*/
let str = '12345';
/*Давайте перевернем символы этой строки в обратном порядке:*/
let str = '12345';
let result = str.split('').reverse().join('');
console.log(result); // выведет '54321'

// let str = 'var_test_text';
// let arr = str.split('_');
// for (let i = 0; i < arr.length; i++) {
// arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1, 4);
// }
// let str2 = arr.join(' ');
// let result = str2.slice(0, 1).toUpperCase() + str2.slice(1).toLowerCase();
// console.log(result);

/*Задача 7
Дана строка со словами.Напишите скрипт, который переставит слова в строке в обратном порядке.*/
let str = 'переставить слова в строке';
let result = str.split(' ').reverse().join(' ');
console.log(result);
