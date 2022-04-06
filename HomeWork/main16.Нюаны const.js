//============16.Нюаны const и изменение обьекта и массива============

const person = {
    userName: 'Mark',
    age: 30,
    isMarried: false
}

//Ошибка переопределения ссылки на новый обьект

person = {
    userName: 'Nik'
}