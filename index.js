const express = require('express');
const { resolve } = require('path');
const mongooes = require("mongoose")
require("dotenv").config()


let mongoUrl=process.env.mongo_url


mongooes.connect(mongoUrl)
.then((res)=>{
  console.log("Connected to database")
})
.catch((err)=>{
  console.log("`Error connecting to database",err)
})



const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
