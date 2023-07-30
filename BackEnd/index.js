// require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const path = require("path");
const http = require("http");
const {Server}=require("socket.io");
// const {ChartSaved}=require("./controller/chart");
const { Chart } = require("./database/Chart");

const connectDatabase = require("./config/connectDatabase");


// const ChartRouter = require("./routes/chart");
// const AuthRouter = require("./routes/auth");

const app = express();
app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Hello");
});

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/hello", (req, res, next) => {
  res.send("Hello there");
  next();
});

// app.use("/auth", AuthRouter);

// app.use("/chart", ChartRouter);

const port = process.argv[2] || 3035;

const server=http.createServer(app);

const io=new Server(server);

connectDatabase().then(() => {
 server.listen(port, () => {
    console.log(
      `Server listening to http requests on http://localhost:${port}`
    );
  });
});


io.on("connection",(socket)=>{

  socket.on("show",async({Id1,Id2})=>{
  
   let userChat=await Chart.findOne({$or:[{Id1,Id2},{Id1:Id2,Id2:Id1}]});
    // console.log(userChat);
    if(userChat===null||Object.keys(userChat).length===0){
      socket.emit(Id1+Id2,{err:true});
    }
    else{
    let arr=userChat.Chat;
    
    let err=false;
    io.emit(Id1+Id2,{arr,err});
    io.emit(Id2+Id1,{arr,err});}

  })

 socket.on("chat",async({Id1,Id2,Message})=>{
  try {
    let userChat={};
    let Chat=[];
    if(Id1&&Id2&&Message){
     
      userChat=await Chart.findOne({$or:[{Id1,Id2},{Id1:Id2,Id2:Id1}]});
      if(userChat===null||Object.keys(userChat).length===0){
        Chat.push({Id1,Message});
        await Chart.create({Id1,Id2,Chat});
      }
      else{
        Chat=userChat.Chat;
        Chat.push({Id1,Message});
        // console.log(userChat.Chat);
        // userChat.Chat.push({Id1,Message})
        await Chart.updateOne({_id:userChat._id},{$set:{Chat:[...Chat]}});
    }

      let err=false;
      
      socket.emit(Id1+Id2,{Chat,err});
      io.emit(Id2+Id1,{Chat,err});
    }
  } catch (error) {
    let err=true;
    console.log("error on line no 74");
    socket.emit(Id1+Id2,{err});
  } 
 })

socket.on("disconnect",()=>{
console.log("disconnected")
})
})







