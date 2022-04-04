//=============10.Обход массива циклом for (of)====================

// const autoBrands = ['Audi','BMW','Mazda','Toyota']

// for (let brand of autoBrands) {
//     console.log(brand)
// } 


//==============11.Обход массива методом forEach()=================

const autoBrands = ['Audi','BMW','Mazda','Toyota']

autoBrands.forEach(function(item, index) {
    console.log(`${index} ${item}`)
})

// autoBrands.forEach(printBrand)

// function printBrand (brand, i) {
//     console.log(`${brand} => ${i}`)
// }

autoBrands.forEach((brand, i) => console.log(`${brand} => ${i}`) )