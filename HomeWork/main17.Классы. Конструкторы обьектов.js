//=============17.Классы. Конструкторы обьектов=============

//Представим ситуацию когда нам нужно описать несколько одинаковых обьектов 


// const person1 = {
//     userName: 'Mark',
//     age: 30,
//     isMarried: false,
//     sayHi: function (name) {
//         console.log(`Привет, ${yourName}! Меня зовут ${userName}!`)
//     }
// }

// const person2 = {
//     userName: 'Pavel',
//     age: 28,
//     isMarried: true,
//     sayHi: function (name) {
//         console.log(`Привет, ${yourName}! Меня зовут ${userName}!`)
//     }
// }

//Опишем класс. Класс это как чертеж для всех будущих обьектов которые 
//будут создаваться на его основе 

//constructor это функция которая будет создавать обьект и 
//наполнять его данными 

class Person {
    constructor (userName, age, isMarried) {
        this.userName = userName
        this.age = age
        this.isMarried = isMarried
    }
    sayHi (name) {
        console.log(`Привет, ${name}! Меня зовут ${this.userName}.`)
    }
}

const person1 = new Person ('Mark', 30, false)
const person2 = new Person ('Pavel', 28, true)

console.log(person1)
console.log(person2)

person1.sayHi('Oleg')
person2.sayHi('Oleg') 