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
    // const li = `<li>${taskTe 

    //Добавляем разметку на страницу 
    // todoList.insertAdjacentHTML('beforeend', li)

    //создаем тег li с помощью создания элемента 
    const newTask = document.createElement('li')
    newTask.innerText = taskText
    

    //создаем кнопку удалить
    const deleteBtn = document.querySelector('button')
    deleteBtn.setAttribute('role', 'button')
    deleteBtn.innerText = 'Удалить'
    deleteBtn.style['margin-left'] = '15px'
    newTask.append(deleteBtn)


    //Добавляем событие по клику
    // deleteBtn.addEventListener('click', function() { 
    //     this.closest('li').remove()
    // })

    deleteBtn.addEventListener('click', deleteTask)




    //добавляем элемент на страницу
    todoList.append(newTask)

    //Очищаем поле ввода 
    todoInput.value = ''

    //Фокус на поле ввода 
    todoInput.focus()


} 


function deleteTask() {
    this.closest('li').remove()
}