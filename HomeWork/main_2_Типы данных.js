//==================2.2 Типы данных==================

// let userName = 'Kiril' // Строка Текст Одна фраза  Та хоть целая книга 

// let number = 30 // Число  

// let isMarried = true //  Логические значения  true/false

// //==============Динамическая типизация =================
// let someVariable = 'Some value'; // сейчас someVarieble типа string
// someVariable = 50; // сейчас наша переменная имеет тим number
// someVariable = true; // теперь наша переменная становится типа Boolean

// //Плохой пример нейминга 
// let u = 'Bob';

//Пример хорошего нейминга 
// let userName = 'James';

//Значение null 
//ничего, пусто или значение неизвестно 
// let age = 33
// age = null
// console.log(age)

//значение undefinde
//означает что значение не было присвоено или оно не было определено 
//если переменная была обьявлена но ей не было присвоено никакого значения 
//то ее значение будет undefinde

// let userName
// console.log(userName)

// let someName = 'James'
// // someName = undefined // Так не делают 
// someName = null // так делают 

//Обьекты
//Массивы

//Оператор typeof
const someName = true
console.log(typeof someName)

//BigInt
console.log(Number.MAX_SAFE_INTEGER)
console.log(7868689879797070707070766868n)//что бы приобразовать обычное число в BigInt нужно добавить n

//symbol 
//уникальное примитивное значение 
//Позволяет добавлять уникальное свойства к обьекту, с уверенностью 
// что он не перезапишет никакое другое свойство 

/* 
1. Числа Number
2. BigInt
3. Строки String
4. Булевые тип данных boolean
5. Null
6. Undefinde
7. Обекты object Массивы 
8. Symbol
*/
