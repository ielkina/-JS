"use strict";
/*Ключи из переменных в многомерных структурах JavaScript
Пусть дан следующий объект:*/
let obj = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
//Давайте выведем какой-нибудь элемент из нашего объекта, например, элемент 'чт':
let obj = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(obj['ru'][3]);
//Пусть теперь язык и номер дня хранятся в переменных:
let lang = 'ru';
let day = 3;
//Выведем с помощью наших переменных какой-нибудь день недели:
let obj = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
let lang = 'ru';
let day = 3;
console.log(obj[lang][day]); //чт

/*Задача 1
Дан следующий объект с названиями месяцев:
Выведите на экран название месяца, соответствующее значениям переменных lang и month.
Даны также следующие переменные:*/
let obj = {
    'ru': [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь',
    ],
    'en': [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
    ],
};
let lang = 'ru'; // может быть или 'ru' или 'en'
let month = 5; // число от 0 до 11
console.log(obj[lang][month]);



/*Задача 2
Дана вот такая структура для хранения списка дел за года, месяцы и дни:
Пусть даны также 3 переменные, содержащие год, месяц и день. Выведите 
дело, соответствующее значениям переменных.*/
let affairs = {
    '2018': {
        11: {
            29: ['дело111', 'дело112', 'дело113'],
            30: ['дело121', 'дело122', 'дело123'],
        },
        12: {
            30: ['дело211', 'дело212', 'дело213'],
            31: ['дело221', 'дело222', 'дело223'],
        },
    },
    '2019': {
        12: {
            29: ['дело311', 'дело312', 'дело313'],
            30: ['дело321', 'дело322', 'дело323'],
            31: ['дело331', 'дело332', 'дело333'],
        }
    },
}
let year = 2018;
let month = 11;
let day = 30;
console.log(affairs[year][month][day]);


/*Подводный камень с ключами объектов
Пусть у нас опять дан наш объект с днями и переменные с языком и номером дня:*/
let obj = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
let lang = 'ru';
let day = 3;
console.log(obj[lang][day]);

/*Сейчас я хочу обратить ваше внимание на распространенные ошибки, возникающие 
в подобном коде.
1.Ошибка первая - имена переменных не следует брать в кавычки:*/
let obj = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
let lang = 'ru';
let day = 3;
console.log(obj['lang']['day']); // так делать неправильно

/*2.Ошибка вторая - имена переменных нельзя записывать как свойства объекта:*/
let obj = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
let lang = 'ru';
let day = 3;
console.log(obj.lang[day]); // так делать неправильно

/*Задача 3
Автор следующего кода хотел вывести элемент со значением '24':*/
let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}
let key1 = 'key2';
let key2 = 'key4';
console.log(obj['key1'][key2]);
console.log(obj[key1][key2]); //
/*Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.*/

/*Задача 4 
Автор следующего кода хотел вывести элемент со значением '24':*/
let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj.key1.key2);
console.log(obj.key2.key4); //
/*Код, однако, выводит не то, что ожидал автор.Исправьте ошибку.

Задача 5
Автор следующего кода хотел вывести элемент со значением '24':*/

let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}
let key1 = 'key2';
let key2 = 'key4';
console.log(obj.key1['key2']);
console.log(obj.key2[key2]); //
/*Код, однако, выводит не то, что ожидал автор.Исправьте ошибку.

Задача 6
Автор следующего кода хотел вывести элемент со значением '24':*/
let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}
let key1 = 'key2';
console.log(obj['key1']['key4']);
console.log(obj.key2.key4); //
//Код, однако, выводит не то, что ожидал автор.Исправьте ошибку.