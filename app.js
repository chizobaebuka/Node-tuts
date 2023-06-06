const { readFile, writeFile } = require('fs');
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise('./Content/first.txt', 'utf-8')
        const second = await readFilePromise('./Content/second.txt', 'utf-8')
        await writeFilePromise('./Content/result-mind-grenade.txt', `This is Awesome: ${first} ${second}`)
        console.log(first, second);
    } catch (error) {
        console.log(error)
    }
}

start()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./Content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))



