const express = require("express");
const mongoose = require('mongoose');
const routes = require("./routes/index")
const methodOverride = require("method-override");
const app = express();
const port = process.env.PORT||4000;
const Db = "mongodb+srv://sajan:sajan@cluster0-g04zi.mongodb.net/test?retryWrites=true"

// app.get("/",(req,res)=>{
// 	res.send("<marquee><a href='/about'>About</a></marquee>");

// })

// app.get("/about",(req,res)=>{
// 	res.send("<a href='/'>Sajan Dhakal</a>");

// })
//connection to the database
mongoose.connect(Db,({useNewUrlParser:true}))
.then(console.log("connected to the mongodh database"))

app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

// const routes = require('./routes');


//Helps to fetch the data from the form
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride("_method"))



app.use('/',routes);



//Creating the server
app.listen(port,()=>{
console.log("Server is created ... ")
});