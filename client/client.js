
let socket = io("http://localhost:3000/");
let inputData=document.getElementById("cahtMsg")
let message=document.getElementById("messages")


  function sendMessage() {

    socket.emit("sendMsg",inputData.value )
  }
  socket.on("reply",(reply)=>{
    let item=document.createElement('li')
    item.textContent=reply
    message.appendChild(item)
    inputData.value=""
    window.scrollTo(0,document.body.scrollHeight)
})