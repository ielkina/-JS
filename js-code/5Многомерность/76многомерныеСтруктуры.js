"use strict";

const arr = require("jshint/data/non-ascii-identifier-start");

/*Многомерные массивы и объекты в JavaScript
Можно комбинировать многомерные массивы и объекты, создавая различные 
конструкции.
Давайте, к примеру, сделаем объект, содержащий внутри себя массивы:*/
let days = {
    'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
    'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
//Выведем какие-нибудь элементы из этого объекта:
console.log(days['ru'][0]); // выведет 'пн'
console.log(days['en'][2]); // выведет 'wd'
/*Массив объектов
А вот в следующем примере вы можете наблюдать массив, состоящий из объектов:*/
let users = [{
        name: 'name1',
        age: 31,
    },
    {
        name: 'name2',
        age: 32,
    },
    {
        name: 'name3',
        age: 33,
    },
];
//Давайте выведем данные какого-либо из юзеров на экран:
console.log(users[1]); // выведет {name: 'name2', age: 32}
/*А теперь выведем имя юзера из элемента массива с номером 1:*/
console.log(users[1]['name']); // выведет 'name2'
//Можно также использовать обращение через точку:
console.log(users[1].name); // выведет 'name2'

/*Задача 1
Дан следующий массив работников:*/
let employees = [{
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];
//Выведите на экран сумму зарплат первого и второго работников.
let result = 0;
for (let i = 0; i < 2; i++) {
    result += employees[i]['salary'];
}
console.log(result);

/*Задача 2
Дан следующий объект со студентами:*/
let students = {
    'boys': ['Коля', 'Вася', 'Петя'],
    'girls': ['Даша', 'Маша', 'Лена'],
};
//Выведите на экран элемент 'Вася' и элемент 'Лена'.
console.log(students['boys'][1], students['girls'][2]);
console.log(students.boys[1], students.girls[2]);