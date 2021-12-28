"use strict";
/* Заполнение массивов с накоплением строки в JavaScript
Давайте заполним массив следующим образом: в первый элемент запишем 'x', 
во второй 'xx', в третий 'xxx' и так далее.
Задача аналогична пирамидке, разница в том, что мы не будем выводить 
формируемую строку на экран, а будем записывать ее в массив, вот так:*/
let arr = [];
let str = '';
for (let i = 0; i < 5; i++) {
    str += 'x';
    arr.push(str);
}
console.log(arr); // выведет ['x', 'xx', 'xxx', 'xxxx', 'xxxxx']

/*Задача 1
С помощью цикла сформируйте следующий массив:*/
//['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']
// let arr = [];
// let str = 'x';
// for (let i = 0; i < 10; i++) {
//     str += 'x';
//     arr.push(str);
// }
// console.log(arr);
// [
//   'xx',         'xxx',
//   'xxxx',       'xxxxx',
//   'xxxxxx',     'xxxxxxx',
//   'xxxxxxxx',   'xxxxxxxxx',
//   'xxxxxxxxxx', 'xxxxxxxxxxx'
// ]
let arr = [];
let str = '';
for (let i = 0; i < 5; i++) {
    str += 'xx';
    arr.push(str);
}
console.log(arr); //[ 'xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx' ]

/*Заполнение массива числами
Давайте теперь заполним массив следующим образом: в первый элемент 
запишем '1', во второй '22', в третий '333' и так далее.
Данная задача также аналогична пирамидке. Реализуем:*/
let arr = [];
for (let i = 1; i < 10; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
        str += i;
    }
    arr.push(str);
}
console.log(arr);
/*[
  '1',         '22',
  '333',       '4444',
  '55555',     '666666',
  '7777777',   '88888888',
  '999999999'
]

Задача 2
С помощью цикла сформируйте следующий массив:*/
['11111', '22222', '33333', '44444', '55555']
let arr = [];
for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 0; j < 5; j++) {
        str += i;
    }
    arr.push(str);
}
console.log(arr);

// let arr = [];
// for (let i = 1; i < 10; i++) {
//     let str = '';
//     for (let j = 0; j < 5; j++) {
//         str += i;

//     }
//     arr.push(str);
// }
// console.log(arr);