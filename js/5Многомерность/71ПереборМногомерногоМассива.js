"use strict";
/*Перебор многомерных массивов в JavaScript
Пусть дан следующий двухмерный массив:*/
let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8],
    [9, 10]
];
/*Давайте выведем все его элементы на экран. Для этого нам необходимо 
запустить два вложенных друг в друга цикла:*/
let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8],
    [9, 10]
];
for (let subArr of arr) {
    for (let elem of subArr) {
        console.log(elem);
    }
}

/*Задача 1
Дан двухмерный массив с числами:*/
/*С помощью вложенных циклов найдите сумму элементов этого массива.*/
let arr = [
    [1, 2, 3],
    [4, 5],
    [6]
];
let sum = 0;
for (let elem of arr) {
    for (let subArr of elem) {
        sum += subArr;
    }
}
console.log(sum); //21

/*Задача 2
Дан трехмерный массив с числами:
С помощью вложенных циклов найдите сумму элементов этого массива.*/
let arr = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
let sum = 0;
for (let elem of arr) {
    for (let subElem of elem) {
        for (let subElemT of subElem) {
            sum += subElemT;
        }
    }
}
console.log(sum); //36

/*Перебор через обычный for
Массивы также можно перебирать не через цикл for-of, а через обычный for:*/
let arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8],
    [9, 10]
];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

/*Задача 3
Решите предыдущие две задачи через цикл for.*/
let arr = [
    [1, 2, 3],
    [4, 5],
    [6]
];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}
console.log(sum); //21

let arr = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let h = 0; h < arr[j].length; h++) {
            sum += arr[i][j][h];
        }
    }
}
console.log(sum); //36