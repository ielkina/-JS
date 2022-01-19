"use strict";
/*Получение чисел Фибоначчи в JavaScript
Сейчас мы с вами научимся получать числа Фибоначчи. Данные числа представляют 
собой последовательность, в которой первые два числа равны либо 0 и 1, а 
каждое последующее число равно сумме двух предыдущих чисел. Вот решение 
описанной задачи:*/
let one = 0;
let two = 1;
for (let i = 1; i <= 10; i++) {
    let current = one + two;
    one = two;
    two = current;
    console.log(current);
}

/*Задача 1
Разберите мое решение описанной задачи, а затем самостоятельно, не подсматривая 
в мой код, решите эту задачу.*/
let one = 0;
let two = 1;
for (let i = 1; i <= 10; i++) {
    let current = one + two;
    one = two;
    two = current;
    console.log(current);
}
/*Задача 2
Решите задачу на нахождение ряда чисел, каждое из которых равно сумме трех 
предыдущих, а первые три числа равны 0, 1 и 2.*/
let one = 0;
let two = 1;
let three = 2;
for (let i = 1; i <= 10; i++) {
    let sum = one + two + three;
    one = two;
    two = three;
    three = sum;
    console.log(sum);
}