const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === "/")
    {   
        res.setHeader('Content-Type', 'text/html')
        res.write("<form action = '/messages' method = 'POST'> <input type = 'text' name = 'message'> <button type='submit'> Submit </button> </form>")
        return res.end();
    }

   
})

server.listen(3000)