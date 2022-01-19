"use strict";
/*Специальные значения в JavaScript
 В JavaScript, как и в других языках программирования, существуют ключевые
 слова для некоторых специальных значений.Вот они: undefined, null, true,
 false, NaN, Infinity, -Infinity.
Значение undefined
 Значение undefined обозначает неопределенность.Такое значение будет у переменной, если
 мы объявили ее, но не записали в нее значение:
     let a;
     alert(a); // выведет undefined
 Это значение можно присвоить переменной явно:
     let a = undefined;
     alert(a); // выведет undefined
 Задача 1
 Объявите переменную, не задавая ей значения.Выведите значение созданной переменной на
 экран.*/
let a;
console.log(a); //undefined
/*
Значение null
 Значение null обозначает "ничего".К примеру, мы можем присвоить переменной такое
 значение
 в знак того, что там ничего не лежит:
     let a = null;
     alert(a); // выведет null
 Задача 2
 Присвойте переменной значение null.Выведите эту переменную на экран.*/
let b = null;
console.log(b); //null
/*
Значения true и false
 Значения true и false обозначают истину и ложь соответственно.Они используются для
 таких вещей, которые предполагают два варианта ответа - да или нет.
 Задача 3
 Присвойте переменной значение true.Выведите эту переменную на экран.*/
let c = true;
console.log(c); //true
/*
Задача 4
Присвойте переменной значение false.Выведите эту переменную на экран.*/
let d = false;
console.log(d); //False
/*
Значение NaN
 Значение NaN(Not - A - Number) обозначает не число.Такое значение получается тогда,
 когда вы пытаетесь делать математические операции не с числами, а с чем - то другим.
 К примеру, такое значение даст попытка умножить строку на число:
     alert('abc' * 3); // выведет NaN
 Любые операции с NaN приводят к тому, что результатом все равно остается NaN:
     alert(NaN + 1); // выведет NaN
 Задача 5
 Сделайте две строки.Перемножьте их друг на друга.Выведите результат умножения на экран.*/
let str1 = "abc",
    str2 = 'cde';
console.log(str1 * str2); //NaN
/*
Значения Infinity и - Infinity
 Значения Infinity и - Infinity обозначают соответственно бесконечность и минус
 бесконечность.Такие значения получаются, если какое - то число поделить на ноль -
 в этом случает JavaScript не выдает ошибку, как в других языках программирования,
 а возвращает эти значения:
     alert(1 / 0); // выведет Infinity
     alert(-1 / 0); // выведет -Infinity
 Задача 6
 Поделите число 10 на 0. Выведите результат на экран.*/
console.log(10 / 0); //Infinity
/*
 Задача 7
 Поделите число - 10 на 0. Выведите результат на экран.*/
console.log(-10 / 0); //-Infiniti