//=============6.4Самовызывающаяся функция IIFE================

//Immediately Invoked Function Expression

(function () {
    console.log('Привет дорогой пользователь!')
})();

let res = (function (a, b) {
    console.log(a + b)
    return a + b
})(10, 15);

console.log(res)

