//=========================27.Секундомер==========================

const counterElement = document.querySelector('#counter')

let counter = 0
let timerID 

//Старт
const buttonStart = document.querySelector('#start')
buttonStart.onclick = function() {
    console.log('Start')
    timerID = setInterval(function() {
    // counter = counter + 1
    // counter += 1
    counter ++
    counterElement.innerText = counter
}, 1000)
    console.log('timerID', timerID)
} 


//Пауза
const buttonPausa = document.querySelector('#pause')
buttonPausa.onclick = function() {
    console.log('Pausa')
    clearInterval(timerID)
}

//Сброс
const buttonReset = document.querySelector('#reset')
buttonReset.onclick = function() {
    counter = 0
    counterElement.innerText = counter
    clearInterval(timerID)
}