//====================18.Выбор DOM элементов=======================

//выбор одного элемента DOM по селектору
// document.querySelector('selector')

// const header =  document.querySelector('h2')
// console.log('header') 

// document.querySelector('h2').classList.add('red')

// const heading2 = document.querySelector('h2')
// heading2.classList.add('red')  

// document.querySelector('.heading-3').classList.add('green')

//выбор коллекции элементов 

// console.log(headings)

// headings.classList.add('red-text')

const headings =  document.querySelectorAll('h2')

for (let heading of headings) {
    // console.log(heading)
    heading.classList.add('red-text')
}

const paragraphs = document.querySelectorAll('p')
// for (let p of paragraphs) {
//     p.classList.add('green-text')
// }

paragraphs.forEach(function (item) {
    item.classList.add('green-text')
})

// так же есть слудующие методы 

document.getElementsByClassName(' link') // выбор колекции элементов по CSS классу
document.getElementsByTagName('h2') //выбор колекции элементов по тегу
document.getElementById('header') // выбор одного элемента по ID
