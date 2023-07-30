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


socket.on("disconnect",()=>{
console.log("disconnected")
})
})







