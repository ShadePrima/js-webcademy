//==================13.Методы в обьектах==================

const person = {
    userName: 'Mark',
    age: 30,
    isMarried: false,
    sayHi: function (name) {
        console.log(`Привет, ${name}!`)
    }
}



// person.sayHi = function (name) {
//     console.log(`Привет, ${name}!`)
// }

person.sayHi('Юрий')