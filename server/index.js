import express from 'express'
import { Server } from 'socket.io'
const app = express()
const port = 3000

app.get('/',(req,res,next)=>{
    res.send("hello world")
})

const server=app.listen(port, () => console.log(`Example app listening on port ${port}!`))

let io=new Server(server,{
    cors:"*"
})

io.on("connection",(socket)=>{

    socket.on("sendMsg",(msg)=>{
        
        io.emit("reply",msg)
        
    })
})