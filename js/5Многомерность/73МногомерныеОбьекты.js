"use strict";
/*Многомерные объекты в JavaScript
Многомерными могут быть не только массивы, но и объекты, вот пример:*/
let obj = {
        a: {
            key1: 'a1',
            key2: 'a2',
            key3: 'a3',
        },
        b: {
            key1: 'b1',
            key2: 'b2',
            key3: 'b3',
        },
        c: {
            1: 'c1',
            2: 'c2',
            3: 'c3',
        },
    }
    //Давайте выведем какие-нибудь элементы нашего объекта:
console.log(obj['a']['key1']); // выведет 'a1'
console.log(obj['c'][1]); // выведет 'c1'
//Можно также обращаться к элементам как к свойствам, то есть через точку:
console.log(obj.a.key1); // выведет 'a1'
//Можно комбинировать оба способа:
console.log(obj['a'].key1); // выведет 'a1'
console.log(obj.a['key1']); // выведет 'a1'
/*А вот если ключ представляет собой число, то его нельзя использовать 
как свойство:*/
console.log(obj.c .1); // будет ошибка
//А вот так будет работать:
console.log(obj.c[1]); // выведет 'c1'

/*Задача 1
Дан следующий объект:
Найдите сумму элементов приведенного объекта.*/
let obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
let sum = 0;
for (let i = 1; i < 4; i++) { //следует помнить что это объект а не массив
    for (let j = 1; j < 4; j++) {
        sum += obj['key' + i]['key' + j];
    }
}
console.log(sum); //45

/*Задача 2
Дан следующий объект:
Выведите на экран элемент 'b2' и элемент 'c1'.*/
let obj = {
    1: {
        1: 'a1',
        2: 'a2',
        3: 'a3',
    },
    2: {
        1: 'b1',
        2: 'b2',
        3: 'b3',
    },
    3: {
        1: 'c1',
        2: 'c2',
        3: 'c3',
    },
}
console.log(obj[2][2], obj[3][1]);

/*Задача 3
Дан следующий объект:
Найдите сумму всех элементов-чисел.*/
let obj = {
    key1: {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
        },
        f: 5
    },
    key2: {
        g: 6,
        h: 7
    }
};
let sum = 0;
for (let elem1 in obj) {
    for (let elem2 in obj[elem1]) {
        for (let elem3 in obj[elem1][elem2]) {
            for (let elem4 in obj[elem1][elem2][elem3]) {
                sum += +elem4;
            }
        }
    }
}
console.log(sum); //пока не могу решить эту задачу

// /*3 Дан следующий объект:*/
// let obj = { key1: { a: 1, b: 2, c: { d: 3, e: 4, }, f: 5, }, key2: { g: 6, h: 7, }, }
//     //Найдите сумму всех элементов - чисел.
// function sumInObj(obj) {
//     let result = 0;
//     if (typeof(obj) == 'object') {
//         for (let key in obj) {
//             if (typeof(obj[key]) != 'object') {
//                 result += obj[key];
//             } else {
//                 let subObj = obj[key];
//                 result += sumInObj(subObj);
//             }
//         }
//         return result;
//     } else { return obj; }
// }
// console.log(sumInObj(obj));
//////////////////////////////
/*решение не мое */