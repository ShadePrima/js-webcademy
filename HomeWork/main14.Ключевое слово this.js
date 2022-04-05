//================14.Ключевое слово this====================


const person = {
    userName: 'Mark',
    age: 30,
    isMarried: false,
    sayHi: function (name) {
        console.log(this)
        console.log(`Привет, ${name}! Меня зовут ${this.userName}!`)
    }
}

person.sayHi('Юрий')