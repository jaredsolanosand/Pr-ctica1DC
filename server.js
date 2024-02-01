//Author: Angel Jared Solano Sandoval - jaredsolanosandoval@gmail.com
const http = require('http')
const server = http.createServer((peticion, respuesta) => {
    respuesta.writeHead(200, {'Content-Type': 'text/plain'})
    respuesta.end("Hola mundo")
})
server.listen(3000)
//Author: Joaly Morales Amaya - joalymorales06@gmail.com
