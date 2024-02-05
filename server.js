const http = require('http');

const PORT = 8900;

const HOSTNAME = 'localhost';



function requestHandler(req, res){
    res.end('Amarachi Kalu')
    
}


const server = http.createServer(requestHandler)

server.listen(PORT, HOSTNAME, ()=>{
    console.log(`server listening on http://${HOSTNAME}:${PORT}`)
})