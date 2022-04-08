//===============21.Работа с прослушкой событий=============


const button = document.querySelector('#button')
const img = document.querySelector('#logo')

button.value = 'Удалить'

button.addEventListener('click', function () {
    console.log('Click1!')
    img.remove()
})

button.addEventListener('click', function () {
    console.log('Click2!')
    img.remove()
})

button.addEventListener('click', function () {
    console.log('Click3!')
    img.remove()
})

// button.onclick = function () {
//     console.log('Click!')
//     img.remove()
// }