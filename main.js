//================14.Ключевое слово this====================


const person = {
    userName: 'Mark',
    age: 30,
    isMarried: false,
    sayHi: function (name) {
        console.log(`Привет, ${name}!`)
    }
}

person.sayHi('Юрий')