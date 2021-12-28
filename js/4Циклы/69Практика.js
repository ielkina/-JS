"use strict";
/*Отработка циклов JavaScript

Задача 1
Выведите с помощью цикла столбец чисел от 1 до 100.*/
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

/*Задача 2
Выведите с помощью цикла столбец чисел от 100 до 1.*/
for (let i = 100; i >= 1; i--) {
    console.log(i);
}

/*Задача 3
Выведите с помощью цикла столбец четных чисел от 1 до 100.*/
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

/*Задача 4
Заполните массив 10-ю иксами с помощью цикла.*/
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push('x');
}
console.log(arr);

// let arr = [];
// let str = '';
// for(let i = 1; i <= 10; i++){
// str += 'x';
// }
// arr.push(str);
// console.log(arr);

/*Задача 5
Заполните массив числами от 1 до 10 с помощью цикла.*/
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);

/*Задача 6
Дан массив с числами. С помощью цикла выведите только те элементы массива, 
которые больше нуля и меньше 10-ти.*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) {
        console.log(arr[i]);
    }
}

let arr = [-2, 15, 8, 2, 1, -22, -10, 12, 11, 1];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) {
        console.log(arr[i]);
    }
}

/*Задача 7
Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент 
со значением 5.*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
        console.log(true);
    }
}
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 5) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } 
/*false
false
false
false
true
false
false
false
false*/
// let arr = [-2,15,8,2,1,4,-10,12,11,1];
// let flag = false;
// for(let i = 0; i < arr.length; i++){
// if(arr[i] == 5){
// flag = true;
// break; }
// }
// if(flag){
// console.log('Est');
// }
// else {console.log('Net');}

/*Задача 8
Дан массив с числами. С помощью цикла найдите сумму элементов этого 
массива.*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

/*Задача 9
Дан массив с числами. С помощью цикла найдите сумму квадратов элементов 
этого массива.*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum3 = 0;
for (let i = 0; i < arr.length; i++) {
    sum3 = arr[i] ** 2;
}
console.log(sum3); //81

/*Задача 10
Дан массив с числами. Найдите среднее арифметическое его элементов 
(сумма элементов, делить на количество).*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumA = 0;
for (let i = 0; i < arr.length; i++) {
    sumA += arr[i] / arr.length;
}
console.log(sumA); //5

/*Задача 11
Напишите скрипт, который будет находить факториал числа. Факториал 
(обозначается !) - это произведение (умножение) всех целых чисел, 
меньше данного, и его самого. Например, 4! = 1*2*3*4.*/
let num = 4;
let result = 1;
for (let i = 1; i <= num; i++) {
    result *= i;
}
console.log(result);