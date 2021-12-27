"use strict";
/*Практика на циклы с массивами и объектами JavaScript

Задача 1
Дан следующий объект с работниками и их зарплатами:*/

/*Увеличьте зарплату каждого работника на 10%.*/
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
for (let key in obj) {
    obj[key] = obj[key] / 100 * 10 + obj[key];
}
console.log(obj);

/*Задача 2
Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем 
работникам, у которых она меньше или равна 400.*/
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
for (let key in obj) {
    if (obj[key] < 400) {
        obj[key] = obj[key] / 100 * 10 + obj[key];
    }
}
console.log(obj);

/*Задача 3
Даны следующие массивы:
С помощью этих массивов создайте новый объект, сделав его ключами элементы 
первого массива, а значениями - элементы второго.*/
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj = {};
// for (let i = 0; i < 5; i++) {
//     obj[arr1[i]] = obj[arr2[i]];
// }
// console.log(obj); /*{
// 	'1': undefined,
// 	'2': undefined,
// 	'3': undefined,
// 	'4': undefined,
// 	'5': undefined
//   }*/

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};
for (let i = 0; i <= 4; i++) {
    obj[arr1[i]] = arr2[i];
}
console.log(obj); //{ '1': 6, '2': 7, '3': 8, '4': 9, '5': 10 }

/*Задача 4
Дан следующий объект:
Найдите сумму ключей этого объекта и поделите ее на сумму значений.*/
let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
let resultKey = 0;
let resultValue = 0;
for (let key in obj) {
    resultKey += +key;
    resultValue = obj[key];
    var sum = resultKey / resultValue;
}
console.log(sum);

/*Задача 5
Дан следующий объект:
Запишите ключи этого объекта в один массив, а значения - в другой.*/
let obj = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
let arr1 = [];
let arr2 = [];
for (let key in obj) {
    arr1.push(key);
    arr2.push(obj[key]);
}
console.log(arr1);
console.log(arr2);

/*Задача 6
Дан следующий объект:*/
/*Запишите в новый массив элементы, значение которых начинается с цифры 1 или 
цифры 2. То есть у вас в результате получится вот такой массив:*/
// let arr = [
//     125,
//     225,
//     128,
//     145,
//     281,
// ];
let obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};
let arr = [];
for (let key in obj) {
    let number = String(obj[key]);
    if (number[0] == 1 || number[0] == 2) {
        arr.push(+number);
    }
}
console.log(arr);

/*Задача 7
Дан следующий массив:*/
//Создайте из этого массива следующий объект:
//let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 0; i < arr.length; i++) {
    let key = i + 1;
    obj[key] = arr[i];
}
console.log(obj); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e' }
/*в ответе ключи в строчном типе а в условии числовой. 
Какой код будет правильным*/

/*Задача 8
Дан следующий массив:*/
//Создайте из этого массива следующий объект:
// let arr = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    obj[key] = i + 1;
}
console.log(obj);