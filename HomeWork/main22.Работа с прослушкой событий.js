//=================22.Работа с прослушкой событий===============

const inputText = document.querySelector('#input-text')
const textBlock = document.querySelector('#text-block')

// inputText.addEventListener('input', function() {
//     // console.log('Input!')
//     console.log(inputText.value)
//     textBlock.innerText = inputText.value
// })
    

//эта функция может выглядеть в виде стрелочной функции

// inputText.addEventListener('input', () => {
//     // console.log('Input!')
//     console.log(inputText.value)
//     textBlock.innerText = inputText.value
// })

//функция может быть описанна отдельно 

inputText.addEventListener('input', inputHandler)

function inputHandler () {
    console.log(inputText.value)
    textBlock.innerText = inputText.value
}