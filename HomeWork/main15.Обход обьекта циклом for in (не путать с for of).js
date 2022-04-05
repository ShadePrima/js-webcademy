//========15.Обход обьекта циклом for in (не путать с for of)==========

//в отличии от for ... of - for ... in может обходить не итерируемые обьекты

const person = {
    userName: 'Mark',
    age: 30,
    isMarried: false,
    sayHi: function (name) {
        console.log(`Привет, ${name}! Меня зовут ${this.userName}!`) 
    }
}

// person.sayHi('Юрий')

for (let key in person) {
    console.log(key)
    console.log(key, ':', person[key])
} 