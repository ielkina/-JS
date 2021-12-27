"use strict";
/*Заполнение массива методом push в JavaScript
Пусть у нас есть массив, который мы заполняем вот таким образом:*/
let arr = [];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
console.log(arr); // выведет [1, 2, 3, 4, 5]
/*В JavaScript существует специальный метод push, который позволяет заполнять 
массивы попроще - не указывая ключей:*/
let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
console.log(arr); // выведет [1, 2, 3, 4, 5]

/*Задача 1
Объявите пустой массив, а затем заполните его числами от 1 до 10. Используйте 
для этого метод push.*/
let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);
console.log(arr);

/*Заполнение массива в цикле
Давайте теперь используем цикл для заполнения массива методом push:*/
let arr = [];
for (let i = 1; i <= 5; i++) {
    arr.push(i);
}
console.log(arr); // выведет [1, 2, 3, 4, 5]

/*Задача 2
Используя цикл и метод push заполните массив числами от 1 до 10.*/
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);

/*Задача 3
Используя цикл и метод push заполните массив 10-ю буквами 'x'.*/
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push('x');
}
console.log(arr);

/*Заполнение массива из другого массива
Пусть у нас дан вот такой массив:*/
let arr = [1, 2, 3, 4, 5];
/*Давайте переберем элементы этого массива циклом и запишем в новый массив только 
элементы с четными числами:*/
let arr = [1, 2, 3, 4, 5];
let result = [];
for (let elem of arr) {
    if (elem % 2 == 0) {
        result.push(elem);
    }
}
console.log(result); // выведет [2, 4]

/*Задача 4
Дан массив с числами. Переберите его циклом и запишите в новый массив только 
положительные из чисел.*/
let arr = [45, 65, -98, 54];
let result = [];
for (let elem of arr) {
    if (elem >= 0) {
        result.push(elem);
    }
}
console.log(result);

/*Переворот массива
Давайте выполним переворот массива, расставив его элементы в обратном порядке.
Понятно, что проще всего здесь будет воспользоваться методом reverse, но 
давайте в учебных целях предположим, что данный метод мы использовать не будем, 
а выполним переворот массива с помощью своего кода.
Для решения задачи переберем исходный массив с конца и запишем его элементы в 
новый массив - они будут идти в обратном порядке:*/
let arr = [1, 2, 3, 4, 5];
let result = [];
for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
}
console.log(result); // выведет [5, 4, 3, 2, 1]

/*Задача 5
Дан следующий массив:*/
let arr = ['a', 'b', 'c', 'd', 'e'];
//Описанным способом сделайте из него массив:
let arr = ['e', 'd', 'c', 'b', 'a'];
let result = [];
for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
}
console.log(result);

/*Необъявленный массив
Пусть мы заполняем массив какими - то элементами:*/
let arr = [];
arr.push(1);
arr.push(2);
arr.push(3);
/*Пусть теперь мы забыли объявить массив.В этом случае попытка применить 
метод push будет приводить к ошибке(выведется в консоль):*/
//let arr = []; - забыли объявить массив
arr.push(1);
arr.push(2);
arr.push(3);

/*Задача 6 
Автор следующего кода хотел создать массив вида['a', 'b', 'c']:*/
let arr = []; //

arr.push('a');
arr.push('b');
arr.push('c');

console.log(arr);
//Написанный код, однако, выдает ошибку в консоль.Исправьте ошибку автора.

/*Задача 7
Автор следующего кода хотел создать заполнить массив числами от 1 до 5:*/
let arr = []; //
for (let i = 1; i <= 5; i++) {
    arr.push(i);
}
console.log(arr);
//Написанный код, однако, выдает ошибку в консоль.Исправьте ошибку автора.

/*Задача 8
Автор следующего кода хотел записать в новый массив только нечетные элементы 
старого массива:*/
//Написанный код, однако, выдает ошибку в консоль.Исправьте ошибку автора.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = [];
for (let elem of arr) {
    if (elem % 2 != 0) {
        result.push(elem);
    }
}
console.log(result);