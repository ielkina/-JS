"use strict";
/*Перебор многомерных объектов в JavaScript
Пусть дан следующий двухмерный массив:*/
let obj = {
        a: {
            1: 'a1',
            2: 'a2',
            3: 'a3',
        },
        b: {
            1: 'b1',
            2: 'b2',
            3: 'b3',
        },
        c: {
            1: 'c1',
            2: 'c2',
            3: 'c3',
        },
    }
    /*Давайте выведем все его элементы на экран. Для этого нам необходимо 
    запустить два вложенных друг в друга цикла for-in:*/
for (let key in obj) {
    let subObj = obj[key];
    for (let subKey in subObj) {
        console.log(subObj[subKey]);
    }
}

/*Задача 1
Дан следующий объект:
Используя циклы, найдите сумму элементов этого объекта.*/
let obj = {
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
}
let sum = 0;
for (let key in obj) {
    let obj1 = obj[key];
    for (let key1 in obj1) {
        sum += +obj1[key1];
    }
}
console.log(sum); // 177