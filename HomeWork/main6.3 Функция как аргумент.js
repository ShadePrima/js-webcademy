//============6.3 Функция как аргумент===============

function summ (a, b) {
    return a + b;
}

// console.log(summ(15, 15))

// const result = summ(summ(15, 15), summ(20, 20))
// console.log(result) 

function diff (a, b) {
    return a - b 
}

function doSomething (func) {
    let x = 10
    let y = 15
    let result =  func(x , y)
    console.log(result)
}

doSomething(summ)
doSomething(diff)

// колбек - функция которая будет вызвана где-то внутри функции
//или функция обратного вызова