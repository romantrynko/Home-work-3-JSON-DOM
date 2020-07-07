
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"

let contentId = document.getElementById("content");
console.log(contentId);


// - отримує текст з блоку з id "rules"

let rulesId = document.getElementById("rules");
console.log(rulesId);


// - замініть текст параграфа з id 'content' на будь-який інший

let contInnerTxt = document.getElementById("content");
contInnerTxt.innerText ='Here is changed text now!';


// - замініть текст параграфа з id 'rules' на будь-який інший

let rulesInnerTxt = document.getElementById("rules");
rulesInnerTxt.innerText ='Here is new paragraph text now!';


// - змініть кожному елементу колір фону на червоний

let divBack = document.getElementsByTagName('div');
divBack[0].style.backgroundColor = 'red';

let liBack = document.getElementsByTagName('li');
for (let i = 0; i < liBack.length; i++){
    liBack[i].style.backgroundColor = 'red';
}

let pBack = document.getElementsByTagName('p');
pBack[0].style.backgroundColor = 'red';


// - змініть кожному елементу колір тексту на синій

let divText = document.getElementsByTagName('div');
divText[0].style.color = 'blue';

let liText = document.getElementsByTagName('li');
for (let i = 0; i < liBack.length; i++){
    liText[i].style.color = 'blue';
}

let pText = document.getElementsByTagName('p');
pText[0].style.color = 'blue';


// - отримати весь список класів елемента з id=rules і вивести їх в console.log

let classRules = document.getElementById("rules");
console.log(classRules.classList);


// - отримати всі елементи з класом fc_rules

let fcRules = document.getElementsByClassName('fc_rules');
console.log(fcRules);


// - поміняти колір тексту у всіх елементів fc_rules на червоний

for (let i = 0; i < fcRules.length; i++) {
   fcRules[i].style.color = 'red';
}


