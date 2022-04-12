//=====================26. setInterval==================

// const timerIntervalID = setInterval(function() {
//     console.log('Fired!')
// }, 1000)

// clearInterval(timerIntervalID)


//======================setTimeOut=========================

// const timerID = setTimeout(function() {
//     console.log('setTimeout Fired!')
// }, 2000) 

// clearInterval(timerID)

//=================setInterval + setTimeout==================

const timerID = setInterval(function() {
    console.log('setInterval Fired')
}, 2000)

setTimeout(function() {
    clearInterval(timerID)
}, 10000)