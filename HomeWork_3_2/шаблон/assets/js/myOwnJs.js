// -- Завантажити з мережі будь-який шаблон сайту. 
//      Підключити до нього свій скріпт-файл. 
//      У файлі прописати наступні доступи та дії

//  - знайти всі елементі, які мають class

console.log(document.querySelectorAll('[class]'));

//  - знайти всі параграфи ,та змінити текст на hello oktenweb!

let allPs = document.getElementsByTagName ('p');

for (ps of allPs) {
    ps.innerText = 'hello oktenweb!';
}

// -  - знайти всі div та змінити ім колір на червоний

let allDivs = document.getElementsByTagName ('div');

for (div of allDivs) {
    div.style.backgroundColor  = 'red';
}