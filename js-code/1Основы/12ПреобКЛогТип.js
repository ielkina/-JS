"use strict";
/*Преобразование к логическому типу в JavaScript
Давайте теперь изучим преобразование других типов данных к логическому. 
Такое преобразование осуществляется с помощью функции Boolean. Вот значения, 
которые при приведению к логическому типу дают false:

console.log(Boolean(0));          // false
console.log(Boolean(-0));         // false
console.log(Boolean(+0));         // false
console.log(Boolean(null));       // false
console.log(Boolean(false));      // false
console.log(Boolean(NaN));        // false
console.log(Boolean(undefined));  // false
console.log(Boolean(''));         // false
Все остальные значения в JavaScript (в других языках бывает не так) дают true. 
Вот значения, приводящиеся к true, но могущие вызвать у вас сомнения:

console.log(Boolean(-1));          // true
console.log(Boolean(Infinity));    // true
console.log(Boolean(-Infinity));   // true
Следующие значения являются строками, так как взяты в кавычки, и также приводятся
к true:

console.log(Boolean('0'));         // true
console.log(Boolean('false'));     // true
console.log(Boolean('NaN'));       // true
console.log(Boolean('null'));      // true
console.log(Boolean('undefined')); // true

Задача 1
Не запуская код, определите, что выведется на экран:*/
let test = Boolean(3);
console.log(test); //true

/*Задача 2
Не запуская код, определите, что выведется на экран:*/
let test = Boolean(0);
console.log(test); //false

/*Задача 3
Не запуская код, определите, что выведется на экран:*/
let test = Boolean(-1);
console.log(test); //true

/*Задача 4
Не запуская код, определите, что выведется на экран:*/
let test = Boolean(-0);
console.log(test); //false

/*Задача 5
Не запуская код, определите, что выведется на экран:*/
let test = Boolean(+0);
console.log(test); //false

/*Задача 6
Не запуская код, определите, что выведется на экран:*/
let test = Boolean('abc');
console.log(test); //true

/*Задача 7
Не запуская код, определите, что выведется на экран:*/
let test = Boolean('');
console.log(test); //false

/*Задача 8
Не запуская код, определите, что выведется на экран:*/
let test = Boolean('0');
console.log(test); //true

/*Задача 9
Не запуская код, определите, что выведется на экран:*/
let test = Boolean(true);
console.log(test); //true

/*Задача 10
Не запуская код, определите, что выведется на экран:*/
let test = Boolean(false);
console.log(test); //false

/*Задача 11
Не запуская код, определите, что выведется на экран:*/
let test = Boolean('true');
console.log(test); //true

/*Задача 12
Не запуская код, определите, что выведется на экран:*/
let test = Boolean('false');
console.log(test); //true

/*Задача 13
Не запуская код, определите, что выведется на экран:*/
let test = Boolean(null);
console.log(test); //false

/*Задача 14
Не запуская код, определите, что выведется на экран:*/
let test = Boolean('null');
console.log(test); //true

/*Задача 15
Не запуская код, определите, что выведется на экран:*/
let test = Boolean(undefined);
console.log(test); //false

/*Задача 16
Не запуская код, определите, что выведется на экран:*/
let test = Boolean('undefined');
console.log(test); //true

/*Задача 17
Не запуская код, определите, что выведется на экран:*/
let test = Boolean(NaN);
console.log(test); //false

/*Задача 18
Не запуская код, определите, что выведется на экран:*/
let test = Boolean('NaN');
console.log(test); //true

/*Задача 19
Не запуская код, определите, что выведется на экран:*/
let test = Boolean(3 * 'abc');
console.log(test); //false

/*Задача 20
Не запуская код, определите, что выведется на экран:*/
let test = Boolean(Infinity);
console.log(test); //true

/*Задача 21
Не запуская код, определите, что выведется на экран:*/
let test = Boolean(1 / 0);
console.log(test); //true