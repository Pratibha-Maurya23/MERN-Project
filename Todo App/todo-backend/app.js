// External Module
const express = require("express");
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const DB_PATH = "mongodb+srv://root:shri@cluster0.56811wo.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0";

const todoItemRouter = require("./routes/todoItemRouter");
const errorsController = require('./controller/errorController')

const app = express();

app.use(express.urlencoded());
app.use(cors());
app.use(express.json());

app.use("/api/todo",todoItemRouter);
app.use(errorsController.pageNotFound);

const PORT = process.env.PORT || 3002;

mongoose.connect(DB_PATH).then(()=>{
  console.log("Connect to Mongoose");
  app.listen(PORT, ()=>{
  console.log(`Server is running at http://localhost:${PORT}`);
  })
}).catch(error=>{
 console.log("Error while connecting to mongo: ",error);
})