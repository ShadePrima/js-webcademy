//==================25.ToDo список задач=====================

const todoList = document.querySelector('#todo-list')
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')

todoForm.addEventListener('submit', formHandler)

function formHandler(event) {
    event.preventDefault()

    //Получаем название задачи из инпута
    const taskText = todoInput.value

    //Создаем тег li через разметку 
    const li = `<li>${taskText}</li>`
    console.log(li)

    //Добавляем разметку на страницу 

}
