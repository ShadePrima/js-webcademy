//=====================24.Работа с элементами===================

/*
//Создание элемента 
document.createElement('teg-name')

//Изменить содержимое внутри HTML элемента
element.innerHTML = ''

//Изменить текстовое содержимое внутри элемента 
node.innerText = ''

//Клонирование элемента 
node.cloneNode() // true с внутренним содержимым (текст и теги)
false - без внутреннего содержимого

//вставить элемент внутрь другого элемента  
element.append(nodesOrDOMStrings)

// Удалить элемент 
element.remove()

*/

//Выбор контейнера 

const container = document.querySelector('#elementsContainer')

//создание заголовка 

const newHeader = document.createElement('h1')
newHeader.innerText = 'Новый заголовок'
container.append(newHeader)

//Копирование шапки
 

//Вставка разметки через строки

// const htmlExample = '<h2>Еще один заголовок</h2>'
// container.insertAdjacentHTML('beforeend', htmlExample)

//всавка разметки через шаблонные строки 

const title = 'Текст заголовка'
const htmlExample = `<h2>${title}</h2>`
container.insertAdjacentHTML('beforeend', htmlExample)