//=======30.Async function. Асинхронные функции. Потребление промиса====


// function promiseFunction () {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             const result = false
//             if (result) {
//                 resolve('DONE!')
//             } else {
//                 reject('FAIL!')
//             }
//         }, 500)
//     })
// } 

// promiseFunction().then().catch()

// console.log(promiseFunction())

// async function startPromise () {
//     try {
//         const result = await promiseFunction()
//         console.log(result)
//     } catch(err) {
//         console.log(err)
//     }
    
// } 
// startPromise()

//=====Несколько асинхронных операций. Серия промисов=======


function checkRooms () {
    return new Promise(function(resolve, reject) {
       setTimeout(function() {
           console.log('Проверяем номера в отеле ... ')
           const availableRooms = true
   
           if (availableRooms) {
               resolve('Номера есть!')
           } else {
               reject('Номеров нет!')
           } 
   
       }, 1500)
   })
}

function checkTickets (data) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('-----then 1-----')
            console.log('Ответ на предыдущем шаге', data)
            console.log('Проверяем авиаблеты ...')
            const availableTickets = false

            if (availableTickets) {
                let message = 'Билеты есть!'
                resolve(message)
            } else {
                let message = 'Билетов нет'
                reject(message)
            }

        }, 1000)
     })
}

function submitVacation (data) {
    console.log('---submitVacation---')
    console.log('Ответ на предыдущем шаге', data)
    console.log('Едем в отпуск')
}    

function cancelVacation (data) {
    console.log('---cancelVacation---')
    console.log('Ответ на предыдущем шаге', data)
    console.log('Отпуск отменяется')
}

async function checkVacation () {
    try {
        const roomsResult = await checkRooms()
        const ticketsResult =  await checkTickets(roomsResult)
        submitVacation(ticketsResult)
    } catch (err) {
        cancelVacation(err)
    }
}

checkVacation()