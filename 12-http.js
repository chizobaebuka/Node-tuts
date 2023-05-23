const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Welcome to my homepage")
    }
    if(req.url === '/about'){
        res.end('Here is a short story')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We cant seem to find the page you are looking for </p>
        <a href="/">Home Page</a>
    `)
})

server.listen(5000)