// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

// let textColor = document.getElementById('main_header');
// let red = Math.random() * 255;
// let blue = Math.random() * 255;
// let green = Math.random() * 255;
// textColor.style.color = `rgb(${red}, ${blue}, ${green})`;

// -- робить шириниу елементу ul 400 пікселів

// let ulWidth = document.getElementsByTagName('ul');
// ulWidth[0].style.width = '400px';

// -- робить шириниу всіх елементів з класом linkList шириною 50%

// let linkListWidth = document.getElementsByClassName('linkList');
// for (let i = 0; i < linkListWidth.length; i++) {
//     linkListWidth[i].style.width = '50%';
// }

// -- отримує текст який зберігається в елементі з класом listElement2

let textListEl2 = document.getElementsByClassName('listElement2');
console.log(textListEl2[0].innerText);



// -- отримує всі елементи li та змінює ім колір фону на сірий

// let liBack = document.getElementsByTagName('li');

// for (let i = 0; i < liBack.length; i++) {
//     liBack[i].style.backgroundColor = 'grey';
// }

// -- отримує всі елементи 'a' та додає їм клас anchor

// let aAnchor = document.getElementsByTagName('a');
// for (let i = 0; i < aAnchor.length; i++) {
//     aAnchor[i].classList.add('anchor');
// }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3, 
//    змінює йому розмір тексту на 40 пікселів

// let aFontSize = document.getElementsByTagName('a');
// for (let i = 0; i < aFontSize.length; i++) {
//     if (aFontSize[i].innerText === 'link3') {
//         aFontSize[i].style.fontSize = '40px'
//     }
// }

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let aXXX = document.getElementsByTagName('a');
// for (let i = 0; i < aXXX.length; i++) {
//     let XXX = aXXX[i].innerText;
//     aXXX[i].classList.add(`element_` + XXX);
// }


// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let subHeader = document.getElementsByClassName('sub-header');
// let color = prompt('Введіть колір', 'red');
// for (let i = 0; i <subHeader.length; i++) {
//     subHeader[i].style.background = color;
// }

// -- отримує всі елементи 'sub-header' та змінює колір тексту 
//    у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let subHeader = document.getElementsByClassName('sub-header');
// let color = prompt('Введіть колір', 'red');
// for (let i = 0; i <subHeader.length; i++) {
//     if (subHeader[i].innerText === 'content 2 segment') {
//         subHeader[i].style.background = color;

//     }
// }

// -- отримує елемент з класом content_1 та заміняє  в ньому текст на довільний. Текст отримати з prompt()

// let content = document.getElementsByClassName('content_1');
// let chngText = prompt('Введіть довільний текст');
// for (let i = 0; i < content.length; i++) {
//     content[i].innerText = chngText;
// }

// -- отримати елементи p та змінити їм paddin на довільне значення

// let elemP = document.getElementsByTagName('p');
// let padd = Math.random() * 50;
// for (let i = 0; i <elemP.length; i++){
//     elemP[i].style.padding = padd + 'px';
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

// let elemText2 = document.getElementsByClassName('text2');
// for (let i = 0; i < elemText2.length; i++) {
//     elemText2[i].innerText = 'random text';
// }
