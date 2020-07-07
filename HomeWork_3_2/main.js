// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. 
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let laptop = {model: 'Dell', display: 15.6, keyboard: true}
// let phone = {color: 'grey', weight: 120, width: 73}
// let man = {name: 'Oleg', age: 45, nationality: 'UA'}
// let vehicle = {type: 'cedan', speed: 240, gerabox: 'automatic'}
// let planet = {shape: 'ellipse', atmosphere: true, life: true}



// создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и 
//  внутренний объект. Опишите что угодно, машину, картину, болт... 
//  Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let notebook = { model: ['Dell', 'Inspiron'], display: {diagonal: 15.6, resolution: 'HD'}, keyboard: true }
// let mobilePhone = { color: ['grey', 'black'], weight: 120, size: {width: 73, height: 156} }
// let human = { name: 'Oleg', age: 45, nationality: 'UA', job : ['driver','freelancer'] , wife: { name: 'Zoe', age: 40 } }
// let car = { type: 'cedan', engine: {capacity: 3, power: 240, torque: 300}, gearbox: [ 1,2,3,4,5,6,'R' ] }
// let earth = { shape: 'ellipse', atmosphere: [ 'oxygen', 'CO2', 'ozone' ], life: true, satelite: { name: 'moon', shape: 'sphere' } }



// При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (let key in laptop) {
//     console.log(key); 
// }
// for (let key in phone) {
//     console.log(key); 
// }
// for (let key in man) {
//     console.log(key); 
// }
// for (let key in vehicle) {
//     console.log(key); 
// }
// for (let key in planet) {
//     console.log(key); 
// }

// for (let key in notebook) {
//     console.log(key); 
// }
// for (let key in mobilePhone) {
//     console.log(key); 
// }
// for (let key in human) {
//     console.log(key); 
// }
// for (let key in car) {
//     console.log(key); 
// }
// for (let key in earth) {
//     console.log(key); 
// }



// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// let keys1 = Object.keys(laptop);
// console.log(keys1);

// let keys2 = Object.keys(phone);
// console.log(keys2);

// let keys3 = Object.keys(man);
// console.log(keys3);

// let keys4 = Object.keys(vehicle);
// console.log(keys4);

// let keys5 = Object.keys(planet);
// console.log(keys5);

// let keys6 = Object.keys(notebook);
// console.log(keys6);

// let keys7 = Object.keys(mobilePhone);
// console.log(keys7);

// let keys8 = Object.keys(human);
// console.log(keys8);

// let keys9 = Object.keys(car);
// console.log(keys9);

// let keys10 = Object.keys(earth);
// console.log(keys10);



// - Создать массив из 10 объектов cars и заполнить его машинами 
//  с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

const cars10 = [
    { model:'Opel', prodYear: 2008, power: 140, color: 'black' },
    { model:'BMW', prodYear: 2005, power: 230, color: 'black' },
    { model:'Mercedes-Benz', prodYear: 2020, power: 280, color: 'brown' },
    { model:'Lada', prodYear: 1991, power: 70, color: 'red' },
    { model:'VW', prodYear: 2001, power: 150, color: 'green' },
    { model:'Audi', prodYear: 2014, power: 230, color: 'black' },
    { model:'Toyota', prodYear: 2008, power: 277, color: 'grey' },
    { model:'Mazda', prodYear: 2018, power: 200, color: 'red' },
    { model:'Subaru', prodYear: 2004, power: 175, color: 'blue' },
    { model:'Volvo', prodYear: 2016, power: 270, color: 'siler' }
]



// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. 
//      (Значаения полей могу быть выдуманными)

const cities = [
    { name:'Lviv', population: 1000000, coutry: 'Ukraine', region: 'Lvivska oblast' },
    { name:'Ternopil', population: 500000, coutry: 'Ukraine', region: 'Ternopilska oblast' },
    { name:'London', population: 7000000, coutry: 'England', region: 'west' },
    { name:'Kamyanets-Podilsky', population: 100000, coutry: 'Ukraine', region: 'Khmelnytska oblast' },
    { name:'Yaremche', population: 50000, coutry: 'Ukraine', region: 'Karpaty' }
]



// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. 
//  Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

const cars = [
    { model:'MAN', prodYear: 2008, power: 430, color: 'brown', driver: { name: 'Tolik', age: '40', sex: 'man', exp: 22} },
    { model:'BMW', prodYear: 2005, power: 250, color: 'blue', driver: { name: 'Rinat', age: '30', sex: 'man', exp: 12} },
    { model:'Audi', prodYear: 2018, power: 230, color: 'black', driver: { name: 'Ashot', age: '32', sex: 'man', exp: 14} },
    { model:'Iveco', prodYear: 2020, power: 410, color: 'white', driver: { name: 'Vasja', age: '28', sex: 'man', exp: 10} },
    { model:'DAF', prodYear: 2019, power: 470, color: 'red', driver: { name: 'Kolja', age: '27', sex: 'man', exp: 7} }
]



// - проитерировать каждый массив из задания 5,6,7 при помощи while.

// let i = 0;
// while (i < cars10.length) {
//     console.log(cars10[i]);
//     i++
// }

// let j = 0;
// while (j < cities.length) {
//     console.log(cities[j]);
//     j++
// }

// let k = 0;
// while (k < cars.length) {
//     console.log(cars[k]);
//     k++
// }



// - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let i = 0; i < cars10.length; i++) {
//     console.log(cars10[i]);
// }

// for (let k = 0; k < cities.length; k++) {
//     console.log(cities[k]);
// }

// for (let j = 0; j < cars.length; j++) {
//     console.log(cars[j]);
// }



// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (let objects of cars10) {
//     console.log(objects);
// }

// for (let objects of cities) {
//     console.log(objects);
// }

// for (let objects of cars) {
//     console.log(objects);
// }



// - взять объекты из задания 1 и превратить каждый в json.

