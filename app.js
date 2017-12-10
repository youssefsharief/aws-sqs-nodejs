const {pollQueueForMessages} = require('./receive-commands')
const {publishEvents} = require('./publish-events')

pollQueueForMessages()



setInterval(() =>{
    publishEvents('eventName', {item:'56'})
}, 3000)