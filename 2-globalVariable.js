// GLOBALS: They can be accessed anywhere in your application. 

// __dirname: This is the path to te current directory 
// __filename: This gives us the filename 
// require: This is a function to make use of modules (commonJS)
// module: This is the info about the current module(file)
// process: This gives info about the environment where the program is being executed.

console.log(__dirname)

setInterval(() => {
    console.log("This interval runs every second(1000) ")
}, 1000)