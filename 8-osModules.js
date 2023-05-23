const os = require('os');
// console.log(os)
// info about current user

const user = os.userInfo()
// console.log(user)

// Returning the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOs)