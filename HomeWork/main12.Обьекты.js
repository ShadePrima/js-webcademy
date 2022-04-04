//=====================12.Обьекты==========================

//Свойства обьектов 

let userName = 'Mark'
let age = 30
let isMarried = false

const person = {
    userName: 'Mark',
    age: 30,
    isMarried: false,
    // profession: 'Designer'
}

console.log(person)
console.log(person.userName)
console.log(person['age'])
console.log(person.age)

// let propertyName = 'profession'

// console.log(person[propertyName])

person.profession = 'JS developer'
console.log(person)

delete person.age
console.log(person)