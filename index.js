const http = require("http")
const server = http.createServer((req, res) => {
    if (req.url == "/home") {
        res.end(`<h1>Homepage</h1><p>I am ezele emmanuel . I am 23 years old. I am a undergraduate of covenant university</p>`)
    } else if (req.url == "/") {
        res.end(`<h1>Homepage</h1><p>I am ezele emmanuel . I am 23 years old. I am a undergraduate of covenant university</p>`)
    }
    else if (req.url == "/about") {
        res.end(`<h1>About Page</h1><p>I am learning backend node js with zuri . i want to work in a great startup</p>`)

    } else if (req.url == "/contact") {
        res.end(`
<h1>Contact Page</h1>
<a href="https://www.linkedin.com/in/emmanuel-ezele-009b18146/">Linkedin Account</a>
<a href="https://github.com/Emmanuelezele123/">Github Account</a>
<a href="https://twitter.com/ezele__/">Twitter Account</a>

`)

    }
})
server.listen(5000)