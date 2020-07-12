// 1 - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. 
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

// let laptop = {model: 'Dell', display: 15.6, keyboard: true}
// let phone = {color: 'grey', weight: 120, width: 73}
// let man = {name: 'Oleg', age: 45, nationality: 'UA'}
// let vehicle = {type: 'cedan', speed: 240, gerabox: 'automatic'}
// let planet = {shape: 'ellipse', atmosphere: true, life: true}



// 2 - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и 
//  внутренний объект. Опишите что угодно, машину, картину, болт... 
//  Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

// let notebook = { model: ['Dell', 'Inspiron'], display: {diagonal: 15.6, resolution: 'HD'}, keyboard: true }
// let mobilePhone = { color: ['grey', 'black'], weight: 120, size: {width: 73, height: 156} }
// let human = { name: 'Oleg', age: 45, nationality: 'UA', job : ['driver','freelancer'] , wife: { name: 'Zoe', age: 40 } }
// let car = { type: 'cedan', engine: {capacity: 3, power: 240, torque: 300}, gearbox: [ 1,2,3,4,5,6,'R' ] }
// let earth = { shape: 'ellipse', atmosphere: [ 'oxygen', 'CO2', 'ozone' ], life: true, satelite: { name: 'moon', shape: 'sphere' } }



// 3 - При помощи for in вывести все ключи всех объектов из задания 1 и 2

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



// 4 - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

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



// 5 - Создать массив из 10 объектов cars и заполнить его машинами 
//  с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// const cars10 = [
//     { model:'Opel', prodYear: 2008, power: 140, color: 'black' },
//     { model:'BMW', prodYear: 2005, power: 230, color: 'black' },
//     { model:'Mercedes-Benz', prodYear: 2020, power: 280, color: 'brown' },
//     { model:'Lada', prodYear: 1991, power: 70, color: 'red' },
//     { model:'VW', prodYear: 2001, power: 150, color: 'green' },
//     { model:'Audi', prodYear: 2014, power: 230, color: 'black' },
//     { model:'Toyota', prodYear: 2008, power: 277, color: 'grey' },
//     { model:'Mazda', prodYear: 2018, power: 200, color: 'red' },
//     { model:'Subaru', prodYear: 2004, power: 175, color: 'blue' },
//     { model:'Volvo', prodYear: 2016, power: 270, color: 'siler' }
// ]



// 6 - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. 
//      (Значаения полей могу быть выдуманными)

// const cities = [
//     { name:'Lviv', population: 1000000, coutry: 'Ukraine', region: 'Lvivska oblast' },
//     { name:'Ternopil', population: 500000, coutry: 'Ukraine', region: 'Ternopilska oblast' },
//     { name:'London', population: 7000000, coutry: 'England', region: 'west' },
//     { name:'Kamyanets-Podilsky', population: 100000, coutry: 'Ukraine', region: 'Khmelnytska oblast' },
//     { name:'Yaremche', population: 50000, coutry: 'Ukraine', region: 'Karpaty' }
// ]



// 7 - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. 
//  Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

// const cars = [
//     { model:'MAN', prodYear: 2008, power: 430, color: 'brown', driver: { name: 'Tolik', age: '40', sex: 'man', exp: 22} },
//     { model:'BMW', prodYear: 2005, power: 250, color: 'blue', driver: { name: 'Rinat', age: '30', sex: 'man', exp: 12} },
//     { model:'Audi', prodYear: 2018, power: 230, color: 'black', driver: { name: 'Ashot', age: '32', sex: 'man', exp: 14} },
//     { model:'Iveco', prodYear: 2020, power: 410, color: 'white', driver: { name: 'Vasja', age: '28', sex: 'man', exp: 10} },
//     { model:'DAF', prodYear: 2019, power: 470, color: 'red', driver: { name: 'Kolja', age: '27', sex: 'man', exp: 7} }
// ]



// 8 - проитерировать каждый массив из задания 5,6,7 при помощи while.

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



// 9 - проитерировать каждый массив из задания 5,6,7 при помощи for .

// for (let i = 0; i < cars10.length; i++) {
//     console.log(cars10[i]);
// }

// for (let k = 0; k < cities.length; k++) {
//     console.log(cities[k]);
// }

// for (let j = 0; j < cars.length; j++) {
//     console.log(cars[j]);
// }



// 10 - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

// for (let objects of cars10) {
//     console.log(objects);
// }

// for (let objects of cities) {
//     console.log(objects);
// }

// for (let objects of cars) {
//     console.log(objects);
// }



// 11 - взять объекты из задания 1 и превратить каждый в json.

// let laptop = {model: 'Dell', display: 15.6, keyboard: true}
// let phone = {color: 'grey', weight: 120, width: 73}
// let man = {name: 'Oleg', age: 45, nationality: 'UA'}
// let vehicle = {type: 'cedan', speed: 240, gerabox: 'automatic'}
// let planet = {shape: 'ellipse', atmosphere: true, life: true}

// let jsLaptop = JSON.stringify(laptop);
// console.log(jsLaptop);

// let jsPhone = JSON.stringify(phone);
// console.log(jsPhone);

// let jsMan = JSON.stringify(man);
// console.log(jsMan);

// let jsVehicle = JSON.stringify(vehicle);
// console.log(jsVehicle);

// let jsPlanet = JSON.stringify(planet);
// console.log(jsPlanet);



// 12 - взять json из задания 11 и превратить их обратно в объекты.

// let parseLaptop = JSON.parse(jsLaptop);
// console.log(parseLaptop);

// let parsePhone = JSON.parse(jsPhone);
// console.log(parsePhone);

// let parseMan = JSON.parse(jsMan);
// console.log(parseMan);

// let parseVehicle = JSON.parse(jsVehicle);
// console.log(parseVehicle);

// let parsePlanet = JSON.parse(jsPlanet);
// console.log(parsePlanet);



// 13 - взять массив из задания 5,в цикле перебрать его объекты превратив их в json

// const cars10 = [
//         { model:'Opel', prodYear: 2008, power: 140, color: 'black' },
//         { model:'BMW', prodYear: 2005, power: 230, color: 'black' },
//         { model:'Mercedes-Benz', prodYear: 2020, power: 280, color: 'brown' },
//         { model:'Lada', prodYear: 1991, power: 70, color: 'red' },
//         { model:'VW', prodYear: 2001, power: 150, color: 'green' },
//         { model:'Audi', prodYear: 2014, power: 230, color: 'black' },
//         { model:'Toyota', prodYear: 2008, power: 277, color: 'grey' },
//         { model:'Mazda', prodYear: 2018, power: 200, color: 'red' },
//         { model:'Subaru', prodYear: 2004, power: 175, color: 'blue' },
//         { model:'Volvo', prodYear: 2016, power: 270, color: 'siler' }
//     ]

//     for (let i = 0; i < cars10.length; i++) {
//         let jsCars10 = JSON.stringify(cars10[i]);
//         console.log(jsCars10);
//     }



// 14 - - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .

// const cities = [
//         { name:'Lviv', population: 1000000, coutry: 'Ukraine', region: 'Lvivska oblast' },
//         { name:'Ternopil', population: 500000, coutry: 'Ukraine', region: 'Ternopilska oblast' },
//         { name:'London', population: 7000000, coutry: 'England', region: 'west' },
//         { name:'Kamyanets-Podilsky', population: 100000, coutry: 'Ukraine', region: 'Khmelnytska oblast' },
//         { name:'Yaremche', population: 50000, coutry: 'Ukraine', region: 'Karpaty' }
//     ]

//     for (let city of cities) {
//         let i = JSON.stringify(city)
//         console.log(i);
//     }



// 15 - взять массив из задания 7,в цикле перебрать его объекты превратив их в json 
//      и сразу скоприовать в новый массив.

// const cars = [
//         { model:'MAN', prodYear: 2008, power: 430, color: 'brown', driver: { name: 'Tolik', age: '40', sex: 'man', exp: 22} },
//         { model:'BMW', prodYear: 2005, power: 250, color: 'blue', driver: { name: 'Rinat', age: '30', sex: 'man', exp: 12} },
//         { model:'Audi', prodYear: 2018, power: 230, color: 'black', driver: { name: 'Ashot', age: '32', sex: 'man', exp: 14} },
//         { model:'Iveco', prodYear: 2020, power: 410, color: 'white', driver: { name: 'Vasja', age: '28', sex: 'man', exp: 10} },
//         { model:'DAF', prodYear: 2019, power: 470, color: 'red', driver: { name: 'Kolja', age: '27', sex: 'man', exp: 7} }
//     ]

//     const newCars = [];

// for (let i = 0; i < cars.length; i++) {
//     let jsCars = JSON.stringify(cars[i]);
//     newCars.push(jsCars);
// }

// console.log(newCars);



// 16 - - Создать массив пользователей. У каждого пользователя обязательно должено быть поле 
//      skills которое является массивом. Проитерировать массив пользователей 
//      и в каждом пользователе проитерировать его массив skills

// const users = [
//     { name: 'Roman', age: 31, skills: ['runing', 'swiming', 'jumping'] },
//     { name: 'Nazar', age: 27, skills: ['computing', 'cycling', 'camping'] },
//     { name: 'Svitlana', age: 59, skills: ['cooking', 'traveling', 'working'] },
//     { name: 'Khrystyna', age: 25, skills: ['cooking', 'traveling', 'jump'] },
//     { name: 'Oleg', age: 60, skills: ['fishing', 'driving', 'hunting'] },
// ]

// for (let user of users) {
//     console.log(user);
    
//     for (let skill of user.skills) {
//     console.log(skill);
//         }
// }

// або

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
    
//     for (let j = 0; j < users[i].skills.length; j++) {
//         console.log(users[i].skills[j]);  
//     }
// }



// 17 - - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. 
//      Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. 
//      Скопировать все skills всех пользователей в отедльный массив

// const users = [
//         { name: 'Roman', age: 31, skills: ['runing', 'swiming', 'jumping'] },
//         { name: 'Nazar', age: 27, skills: ['computing', 'cycling', 'camping'] },
//         { name: 'Svitlana', age: 59, skills: ['cooking', 'traveling', 'working'] },
//         { name: 'Khrystyna', age: 25, skills: ['cooking', 'traveling', 'jump'] },
//         { name: 'Oleg', age: 60, skills: ['fishing', 'driving', 'hunting'] },
//     ]
    
// let newUsers = [];

//     for (let user of users) {
//         console.log(user);
        
//         for (let skill of user.skills) {
//         newUsers.push(skill);
//         console.log(skill);
//         }
//     }

//     console.log(newUsers);
    


// 18 - - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

//  let users = [
//      { name: 'vasya', age: 31, status: false, skills: ['java', 'js'] }, 
//      { name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html'] }, 
//      { name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo'] }, 
//      { name: 'olya', age: 28, status: false, skills: ['java', 'js'] }, 
//      { name: 'max', age: 30, status: true, skills: ['mysql', ',mongo'] }
//     ];

//     for (let user of users) {
//         console.log(user);
                
//         for (let skill of user.skills) {  
//             console.log(skill);
//         }
//     }



// 24 - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.


// let users = [
//     {
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//     }, 
//     {
//         name: 'petya',
//         age: 30,
//         status: true,
//         address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//     }, 
//     {
//         name: 'kolya',
//         age: 29,
//         status: true,
//         address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//     }, 
//     {
//         name: 'olya',
//         age: 28,
//         status: false,
//         address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//     }, 
//     {
//         name: 'max',
//         age: 30,
//         status: true,
//         address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//     }, 
//     {
//         name: 'anya',
//         age: 31,
//         status: false,
//         address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//     }, 
//     {
//         name: 'oleg',
//         age: 28,
//         status: false,
//         address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//     }, 
//     {
//         name: 'andrey',
//         age: 29,
//         status: true,
//         address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//     }, 
//     {
//         name: 'masha',
//         age: 30,
//         status: true,
//         address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//     }, 
//     {
//         name: 'olya',
//         age: 31,
//         status: false,
//         address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//     }, 
//     {
//         name: 'max',
//         age: 31,
//         status: true,
//         address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//     }
// ];

// let adDress = [];

//     for (let user of users) {
    //         adDress.push(user.address);
//     }
    
//     console.log(adDress);

// 25 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. 
// Всі данні в одному блоці.

// for (let user of users) {
    //     let userDiv = document.createElement('div');
    
    //     userDiv.style.backgroundColor = 'grey';
    //     userDiv.style.margin = '20px';
    //     userDiv.innerHTML = `${user.name} ${user.age} ${user.status} ${user.address}`;
    
    //     document.body.appendChild(userDiv);
// }

// 26 - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, 
//      розділивши всі властивості по своїм блокам (div>div*4)




// let container = document.getElementById('container');
// for (const user of users) {
//     let outerDiv = document.createElement('div');
//     outerDiv.classList.add('user');

    
//     for (const field in user) {
//         let innerDiv = document.createElement('div');
//         innerDiv.classList.add(field);
//         innerDiv.innerText = `${user[field]}`;
//         outerDiv.appendChild(innerDiv);
//     }
     
//     container.appendChild(outerDiv);
// }



// 27 - - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок 
//         за допомоги document.createElement, розділивши всі властивості по своїм блокам , 
// //         блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let container = document.getElementById("container");
// for (const user of users) {
//     let outerDiv = document.createElement("div");
//     outerDiv.classList.add("user");

//     for (const field in user) {
//       let innerDiv = document.createElement("div");
//       innerDiv.classList.add(field);

//       if (typeof user[field] === 'object') {
        
//         for (const addressField in user[field]) {
//           let addressCell = document.createElement("div");
//           addressCell.innerText = `${addressField}: ${user[field][addressField]}`;
//           addressCell.style.marginLeft = '10px';
//           innerDiv.appendChild(addressCell);
//         }
//       } 
//       else {
//         innerDiv.innerText = `${user[field]}`;
//       }
      
//       outerDiv.appendChild(innerDiv);
//     }

//     container.appendChild(outerDiv);
//   }



// 87 - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false}, 
//     {id: 2, name: 'petya', age: 30, status: true}, 
//     {id: 3, name: 'kolya', age: 29, status: true}, 
//     {id: 4, name: 'olya', age: 28, status: false},
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'}, 
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
//     {user_id: 2, country: 'Poland', city: 'Krakow'}, 
//     {user_id: 4, country: 'USA', city: 'Miami'},
// ];

// 91 - З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// user
// for (let i = 0; i < usersWithId.length; i++)
//     {
//         for (let j = 0; j < citiesWithId.length; j++)
//         {
//             if (usersWithId[i].id === citiesWithId[j].user_id) 
//             {
//                 usersWithId[i].address = citiesWithId[j];
//             }
            
//         }
        
//     }
//     console.log(usersWithId);
    


//100- створити розмітці блок з id, class та текстом в середені. 
//      Зчитати окремо цей текст з селекторів по id , class та тегу



// let div = document.createElement('div');
// div.id='Lviv';
// div.classList.add('hello');
// div.innerText='Hello Lviv';
// document.body.appendChild(div);


// let textById = document.getElementById('Lviv');
// console.log(textById.textContent);

// let textByClass = document.getElementsByClassName('hello');
// for(let text of textByClass)
// {
//     console.log(text.textContent);
// }

// let textByTag = document.getElementsByTagName('div');
//     console.log(textByTag[1].textContent);



// 101 - змінити цей текст використовуючи селектори id, class,  tag

// textById.innerText = 'New text by id';
// console.log(textById.textContent);

// for (text of textByClass) {
//     text.innerText = 'New text by Class';
//     console.log(text.textContent);
// }

// textByTag[1].textContent = 'New text by Tag';
// console.log(textByTag[1].textContent);



// 102 - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// let heightWidthById = document.getElementById('Lviv');
// heightWidthById.style.height = '50px';
// heightWidthById.style.width = '50%';


// let heightWidthByClass = document.getElementsByClass('hello');
// for (heightWidth of heightWidthByClass) {
//     heightWidth.style.height = '50px';
//     heightWidth.style.width = '100%';
// }

// let heightWidthByTagName = document.getElementsByTagName('div');

// for (heightWidth of heightWidthByTagName) {
//     heightWidth.style.height = '50px';
//     heightWidth.style.width = '50%';
// }



// 103 - за допомоги document.createElement та appendChild створити таблицю на 1 рядок 
//      з трьома ячейками всередені

// let table = document.createElement('div');
// document.body.appendChild(table);
// table.classList.add('tableStyle');
// createTable(table, 3, 1);

 



// 104 - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків 
//          з трьома ячейками всередені
// 
// for(let i = 0; i < 10; i++) {
//     let table = document.createElement('div');
//     document.body.appendChild(table);
//     table.classList.add('tableStyle');
    
    
//         let cell = document.createElement('div');
//         cell.classList.add('cellStyle');
//         table.appendChild(cell);
//         cell.innerText = 'Cell';
    
// }

// 105 - за допомоги document.createElement, 
//      appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені 

//  for(let i = 0; i < 10; i++) {
//     let table = document.createElement('div');
//     document.body.appendChild(table);
//     table.classList.add('tableStyle');
    
//     for(let i = 0; i < 5; i++){
//         let cell = document.createElement('div');
//         cell.classList.add('cellStyle');
//         table.appendChild(cell);
//         cell.innerText = 'Cell';
//     }
// }



// 106 - за допомоги document.createElement, appendChild та 2х циклів створити таблицю 
//       на n рядків з m ячейками всередені. n та m отримати з prompt
// let n = prompt ('Введіть кількість рядків');
// let m = prompt ('Введіть кількість клітинок');

// for(let i = 0; i < n; i++) {
//         let table = document.createElement('div');
//         document.body.appendChild(table);
//         table.classList.add('tableStyle');
        
//         for(let i = 0; i < m; i++){
//             let cell = document.createElement('div');
//             cell.classList.add('cellStyle');
//             table.appendChild(cell);
//             cell.innerText = 'Cell';
//         }
//     }


// 121 - -Є масив котрий характеризує правила. 
//          Створити скрипт який ітерує цей масив, 
//          та робить з кожне правило в окремому блоці.
//          При цому в блоці, номер правила записати в свій блок, 
//          текст правила записати в свій окремий блок.
//          Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

			let rules = [
				{
					title: 'Первое правило Бойцовского клуба.',
					body: 'Никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Второе правило Бойцовского клуба.',
					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
				},
				{
					title: 'Третье правило Бойцовского клуба.',
					body: 'В схватке участвуют только двое.'
				},
				{
					title: 'Четвертое правило Бойцовского клуба.',
					body: 'Не более одного поединка за один раз.'
				},
				{
					title: 'Пятое правило Бойцовского клуба.',
					body: 'Бойцы сражаются без обуви и голые по пояс.'
				},
				{
					title: 'Шестое правило Бойцовского клуба.',
					body: 'Поединок продолжается столько, сколько потребуется.'
				},
				{
					title: 'Седьмое правило Бойцовского клуба.',
					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
				},
				{
					title: 'Восьмое и последнее правило Бойцовского клуба.',
					body: 'Новичок обязан принять бой.'
				},

			];


            for (let i = 0; i < rules.length; i++) {
                let rule = document.createElement('div');
                let ruleNumber = document.createElement('div');
                let ruleText = document.createElement('div');
                
                ruleNumber.innerText = rules[i].title;
                ruleText.innerText = rules[i].body;
                rule.appendChild(ruleNumber);
                rule.appendChild(ruleText);
                
                let wrapper = document.getElementById('wrap');
                
                wrapper.appendChild(rule);
            }
