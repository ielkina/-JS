"use strict";
/*Перебор многомерных комбинаций в JavaScript
Пусть дан следующий массив с юзерами:*/
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
//Давайте переберем этот массив циклом и выведем данные юзеров на экран:
for (let user of users) {
    document.write(user.name + ' ' + user.age + '<br>');
}
/*Как вы видите, не смотря на то, что данная конструкция массивов-объектов 
двухмерная, для вывода юзеров мы используем один цикл, просто обращаясь 
внутри этого цикла к различным данным юзера.

Задача 1
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
//Выведите на экран данные каждого работника в формате имя - зарплата.
for (let staff of employees) {
    console.log(staff.name, staff.salary);
}


/*Задача 2
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
let sum = 0;
for (let salary of employees) {
    sum += salary.salary;
}
console.log(sum);
//Выведите на экран сумму зарплат всех работников.

/*Задача 3
Дан следующий массив работников:*/
let employees = [{
        name: 'name1',
        salary: 300,
        age: 28,
    },
    {
        name: 'name2',
        salary: 400,
        age: 29,
    },
    {
        name: 'name3',
        salary: 500,
        age: 30,
    },
    {
        name: 'name4',
        salary: 600,
        age: 31,
    },
    {
        name: 'name5',
        salary: 700,
        age: 32,
    },
];
/*Выведите на экран сумму зарплат тех работников, возраст которых равен 
или более 30 лет.*/
let sum = 0;
for (let elem of employees) {
    if (elem.age >= 30) {
        sum += elem.salary;
    }
}
console.log(sum); //1800

/*Задача 4
Дан следующий массив работников, в котором поле dismissed хранит в себе 
информацию о том, уволен работник или нет (true - уволен):*/
let employees = [{
        name: 'name1',
        salary: 300,
        dismissed: false,
    },
    {
        name: 'name2',
        salary: 400,
        dismissed: true,
    },
    {
        name: 'name3',
        salary: 500,
        dismissed: false,
    },
    {
        name: 'name4',
        salary: 600,
        dismissed: true,
    },
    {
        name: 'name5',
        salary: 700,
        dismissed: false,
    },
];
//Выведите на экран имена и зарплаты неуволенных работников.
for (let staff of employees) {
    if (staff.dismissed == false) {
        console.log(staff.name, staff.salary);
    }
}

/*Сложные структуры
Пусть теперь у нас дан следующий объект со студентами:*/
let students = {
    'group1': ['student11', 'student12', 'student13'],
    'group2': ['student21', 'student22', 'student23'],
    'group3': ['student31', 'student32'],
};
/*Пусть количество групп и количество студентов в каждой группе может быть любым.
Давайте выведем на экран имена всех студентов, перебрав наш объект двумя 
вложенными циклами.
Как вы видите, у нас объект с массивами. Это значит, что первый цикл должен быть 
по объекту, а второй - по массивам. То есть первый цикл будет for-in, а 
второй - for-of, вот так:*/
for (let group in students) {
    for (let name of students[group]) {
        console.log(name);
    }
}

/*Задача 5
Дана следующая структура с данными:*/
let data = {
    1: [
        'data11',
        'data12',
        'data13',
    ],
    2: [
        'data21',
        'data22',
        'data23',
    ],
    3: [
        'data31',
        'data32',
        'data33',
        'data34',
        'data35',
    ],
    4: [
        'data41',
        'data42',
    ],
};
//С помощью вложенных циклов выведите на экран все строки с данными.
for (let group in data) {
    for (let name of data[group]) {
        console.log(name);
    }
}

/*Задача 6 
Дана следующая структура с данными:*/
let data = [{
        1: 'data11',
        2: 'data12',
        3: 'data13',
        4: 'data14',
    },
    {
        1: 'data21',
        2: 'data22',
        3: 'data33',
    },
    {
        1: 'data31',
        2: 'data32',
    },
];
/*Количество объектов в массиве и количество элементов в 
объекте может быть произвольным.С помощью вложенных циклов 
выведите на экран все строки с данными.*/
for (let group of data) {
    for (let name in group) {
        console.log(group[name]);
    }
}

/*Задача 7 
Дана следующая структура с данными:*/

let data = [{
        1: [
            'data111',
            'data112',
            'data113',
        ],
        2: [
            'data121',
            'data122',
            'data123',
        ],
    },
    {
        1: [
            'data211',
            'data212',
            'data213',
        ],
        2: [
            'data221',
            'data222',
            'data223',
            'data224',
        ],
        3: [
            'data231',
            'data232',
            'data233',
            'data234',
            'data235',
        ],
    },
    {
        1: [
            'data411',
            'data412',
            'data413',
        ],
        2: [
            'data421',
        ],
    },
];
//С помощью вложенных циклов выведите на экран все строки с данными.
for (let group of data) {
    for (let key in group) {
        for (let subElem of group[key]) {
            console.log(subElem);
        }
    }
}