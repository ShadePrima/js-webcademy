//===============7.1 Методы массива====================

/*
.push(), .pop(), shift(), unshift(), splice(), slice(), forEach(),
indexOf(), includes()
*/

/*
arr.push(...items) - Добавление элемента в конец массива
arr.pop() - Удалить элемент из конца массива
arr.shift() - Удалить элемент из начала массива 
arr.unshift(...items) - Добавить элемент в начало массива 
arr.splice([start], [deleteCaunt, newElements])
*/

/*
['Audi','BMW','Mazda','Toyota']
*/

const autoBrands = ['Audi','BMW','Mazda','Toyota']
console.log(autoBrands)

autoBrands.push('Nissan') 
console.log(autoBrands) 

autoBrands.splice(2, 1)
console.log(autoBrands)