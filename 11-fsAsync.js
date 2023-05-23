const { readFile, writeFile } = require("fs");
console.log('start')

readFile("./Content/first.txt", 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile("./Content/second.txt", 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result;
        writeFile('./Content/resultAsync.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task')
        })
    })
})
console.log('starting next task')