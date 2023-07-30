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

 socket.on("chat",async({Id1,Id2,Message})=>{
  try {
    if(Id1&&Id2&&Message){
      let userChat={};
  
      userChat=Chart.find({$or:[{Id1,Id2},{Id1:Id2,Id2:Id1}]});
      if(userChat===null||Object.keys(userChat).length===0){
        let Chat=[];
        Chat.push(Message);
        await Chart.create({Id1,Id2,Message});
      }
  
      userChat=Chart.find({$or:[{Id1,Id2},{Id1:Id2,Id2:Id1}]});
      let arr=userChat.Chat;
      let err=false;
      socket.emit(Id1+Id2,{arr,err});
      io.emit(Id2+Id1,{arr,err});
    }
  } catch (error) {
    console.log("error on line no 74")
  } 
 })

socket.on("disconnect",()=>{
console.log("disconnected")
})
})







