// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// const dog = {name: 'Bars',age: 12,color: 'black',weight: 35,height: 40}

// const human = {name: 'Roman',age: 31,nationality: 'Ukraine',weight: 78,height: 172}

// const car = {model: 'Honda',type: 'coupe',color: 'black',power: 187,torque: 230}

// const apart = {location: Ukraine,building: 'new',rooms: 2,floor: 9,renovation: 'design'}

// const book = {author: 'Iaroslav Melnyk',language: 'ua',pages: 450,genre: 'science fiction',country: 'Ukraine'}



// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// const arr = [
//     { name: 'Bars', age: 12, color: 'black', weight: 35, height: 40 },
//     { name: 'Rex', age: 14, color: 'brown', weight: 40, height: 45 },
//     { name: 'Tom', age: 8, color: 'grey', weight: 32, height: 37 },
//     { name: 'Range', age: 10, color: 'black', weight: 20, height: 25 },
//     { name: 'Hatiko', age: 2, color: 'white', weight: 10, height: 20 },
//     { name: 'Roman', age: 31, nationality: 'Ukraine', weight: 78, height: 172 },
//     { name: 'Yura', age: 18, nationality: 'Ukraine', weight: 55, height: 175 },
//     { name: 'Maks', age: 1, nationality: 'Ukraine', weight: 10, height: 50 },
//     { name: 'Nazar', age: 27, nationality: 'Ukraine', weight: 70, height: 180 },
//     { name: 'Tina', age: 25, nationality: 'Ukraine', weight: 58, height: 178 },
//     { model: 'Honda', type: 'coupe', color: 'black', power: 187, torque: 230 },
//     { model: 'Opel', type: 'SUV', color: 'silver', power: 147, torque: 210 },
//     { model: 'Toyota', type: 'cedan', color: 'grey', power: 277, torque: 325 },
//     { model: 'BMW', type: 'SUV', color: 'black', power: 230, torque: 250 },
//     { model: 'Audi', type: 'cedan', color: 'black', power: 230, torque: 250 },
// ]

// console.log(arr);



// -- створити об'єкт (не меньше 5ти властивостей) який описує, 
//   одна з властивостей обов'язково повинна бути об'єктом, ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

// const house = {
//     location: { country: 'Ukraine', city: 'Lviv', street: 'Piskova' },
//     building: 'new', 
//     interior:  ['2 bedrooms', 'kitchen', 'living room', 'dining room', 'bathroom', 'toilet',],
//     floors: 2, 
//     renovation: true
// }

// const driver = {
//     id: { firstname: 'Roman', lastname: 'Trynko' },
//     age: 31, 
//     born: ['Ukraine', 'Lviv'],
//     weight: 78, 
//     height: 172
// }

// const toy = {
//     id: { name: 'Lego', type: 'Technic', model: '8880 Super car' },
//     releaseDate: 1994, 
//     color: 'black', 
//     pieces: 1343, 
//     specs: [ 'v8 engine', '4 steering wheels', 'independent suspension' ]
// }

// const table = {
//     id: { model: 'Nicolas', type: 'Manchester' },
//     size: [200, 95, 76],
//     color: 'walnut', 
//     code: 'MD000015', 
//     material: 'veneer'
// }

// const bag = {
//     colection: 'Emporio Armani', 
//     size: { width: 23, height: 23, depth: 10 }, 
//     material: ['polyester 100', 'polyurethane 100'],
//     id: '4901-TOM01R', 
//     manCode: 'Y4M177.YEW0J',
// }



// Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

// console.log(users[7].status);
// console.log(users[10].status);
// console.log(users[users.length-2].name);
// console.log(users[2].name);
// console.log(users[6].age);
// console.log(users[3].age);
// console.log(users[4].age, users[4].name);
// console.log(users[5].age, users[5].status);



// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний