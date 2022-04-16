// //====================29.Создание промиса====================

//  const myPromise = new Promise(function(resolve, reject){
//      console.log('Promise created')
//      setTimeout(function() {
//          //запрос на сервер
//          const response = true
//          if (response) {
//              let message = 'SUCCESS' 
//              resolve(message)
//          } else {
//              let message = 'FAILED'
//              reject(message)
//          }

//      }, 1500)
//  }) 

//  myPromise.then(function(data) {

//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log('Then 1')
//             console.log(data)

//             const response = false
//             if (response) {
//                 resolve('Data from then 1')
//             } else {
//                 reject('Data from then 1')
//             }
//          }, 1000)
//     }) 


     
    
//  }).then(function(data) {  
//      setTimeout(() => {
//         console.log('Then 2')
//         console.log(data)
//      })
     
//  }).catch(function(data) {
//      console.log('Catch')
//      console.log(data)
// })


//========== Цепочка промисов. Несколько промиссов в setTimeout=========

// const checkRooms = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('Проверяем номера в отеле ... ')
//         const availableRooms = true

//         if (availableRooms) {
//             resolve('Номера есть!')
//         } else {
//             reject('Номеров нет!')
//         } 

//     })
// })

// checkRooms.then(function(data) {
//      return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log('-----then 1-----')
//             console.log('Ответ на предыдущем шаге', data)
//             console.log('Проверяем авиаблеты ...')
//             const availableTickets = true

//             if (availableTickets) {
//                 let message = 'Билеты есть!'
//                 resolve( message)
//             } else {
//                 let message = 'Билетов нет'
//                 reject(message)
//             }

//         }, 1000)
//      })
// }).then(function(data) {
//     console.log('-----then 2-----')
//     console.log('Ответ на предыдущем шаге', data)
//     console.log('Едем в отпук')
// }).catch(function(data) {
//      console.log('---catch---')
//      console.log('Ответ на предыдущем шаге', data)
//      console.log('Отпуск отменяется')
// })

// checkRooms.then(function(data) {
//     console.log('---then1. submitVacation---')
//     console.log('Ответ на предыдущем шаге', data)
//     console.log('Едем в отпуск')
// }).catch(function(data) {
//     console.log('---catch---')
//     console.log('Ответ на предыдущем шаге', data)
//     console.log('Отпуск отменяется')
// })

 //==========Цепочка промиссов Создаем отдельные функции========


 
 
 
//  const checkRooms = 
    
    // checkRooms.then(function(data) {
         
    // }).then(function(data) {
    //     console.log('-----then 2-----')
    //     console.log('Ответ на предыдущем шаге', data)
    //     console.log('Едем в отпук')
    // }).catch(function(data) {
    //      console.log('---catch---')
    //      console.log('Ответ на предыдущем шаге', data)
    //      console.log('Отпуск отменяется')
    // })
    
    checkRooms()
        .then(checkTickets)
        .then(success)
        .catch(failed)

    function checkRooms () {
        return new Promise(function(resolve, reject) {
           setTimeout(function() {
               console.log('Проверяем номера в отеле ... ')
               const availableRooms = false
       
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
                    resolve( message)
                } else {
                    let message = 'Билетов нет'
                    reject(message)
                }
    
            }, 1000)
         })
    }

    function success (data) {
        console.log('---then1. submitVacation---')
        console.log('Ответ на предыдущем шаге', data)
        console.log('Едем в отпуск')
    }    
    
    function failed (data) {
        console.log('---catch---')
        console.log('Ответ на предыдущем шаге', data)
        console.log('Отпуск отменяется')
    }