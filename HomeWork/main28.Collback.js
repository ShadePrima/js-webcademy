//=====================28.Collback. Collback hell===================


// setTimeout(function() {
//     console.log('Step1')
//     setTimeout(function(){
//         console.log('Step2')
//         setTimeout(function(){
//             console.log('Step3')
//         }, 1000)
//     }, 1500)
// }, 3000)







// function checkRooms() {
//     setTimeout(function() {
//         console.log('Проверяем номера в отеле ...')
//         const availableRooms = false


//         if (availableRooms) {
//             console.log('Номера есть!')
//             console.log('Едем в отпуск!')
//         }else {
//             console.log('Номеров нет!')
//             console.log('Отпуск отменяется!')
//         }
        
//     }, 1000)
// }
// checkRooms()


//Проверяем номера в отеле 
//Проверяем авиабилеты

//Летим в отпуск
//Отпуск отменяется 


function checkRooms(success, failed) {
    setTimeout(function() {
        console.log('Проверяем номер в отеле ...')
        const availableRooms = false

        if (availableRooms) {
            let message = 'Номера есть'
            // submitVacation(message)
            success(message)
        }else {
            let message = 'Номеров нет'
            // cancelVacation(message)
            failed(message)
        }

    }, 1000)
 }

 function cancelVacation(message) {
    console.log('---  cancelVacation ----')
    console.log('Ответ на предыдущем шаге:', message)
    console.log('Отпуск отменяется :(')
}

function submitVacation(message) {
    console.log('---- submitVacation ----')
    console.log('Ответ на предыдущем шаге:', message)
    console.log('Едем в отпуск!')
}

function checkTickets(message, success, failed) {
    setTimeout(function() {
        console.log('----function checkTicets')
        console.log('Ответ на предыдущем шаге:', message)

        console.log('Проверяем авиабилеты ...')
        // ----код который отправляет запрос в авиакомпанию ----
        const availableTickets = true

        if (availableTickets) {
            let message = 'Билеты есть'
            success(message)
        } else {
            let message = "Билетов нет"
            failed(message)
        }
    }, 500)
}

//callbacl hell разрастается 
//код уезжает вправо 


checkRooms(
    function(messageFromCheckRooms) {
        checkTickets(
            messageFromCheckRooms, 
            function(messageFromCheckTickets) {
                submitVacation(messageFromCheckTickets)
            },
            function(messageFromCheckTickets) {
                cancelVacation(messageFromCheckTickets)
         })
 }, 
 function(messageFromCheckRooms) {
        cancelVacation(messageFromCheckRooms)
})


 



        
    



 
