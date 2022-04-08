//==================20.Работа с атрибутами========================

/*
getAttribute(attrName) // взвращает значение указанного атрибута
setAttribute(name, value) //добвляет указаный атрибут и его значение к элементу
hasAttribute(attrName) // возвращает true при наличии у элумента указанного атрибута
removeAttribute(attrName) //удаляет указанный атрибут 
toggleAttribute(name, force) // добавляет новый атрибут при отсутствии или 
// удаляет существующией атрибут 
hasAttributes() // возвращает trut при наличии у элемента каких либо атрибутов
getAttributesNames() //возвращает название атрибутов элемента  
*/


const img = document.querySelector('#logo')
// // console.log(img)
// const srcValue = img.getAttribute('src')
// console.log(srcValue) 

// img.setAttribute('src', './img/php.png')
// img.setAttribute(' ', '200')
// img.src = './img/js.png' 

const button = document.querySelector('#button')
button.setAttribute('value',  'Отправить')
button.value = 'Текст для кнопки'