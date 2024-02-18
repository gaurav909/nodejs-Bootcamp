// // // // // // function add(a,b){
// // // // // //     return a + b
// // // // // // }

// // // // // // var add = (a, b) => {
// // // // // //   return a + b;
// // // // // // };
// // // // // // const result = add(6, 4);
// // // // // // console.log(result)
// // // // // (function () {
// // // // //   console.log("gaurav singh");
// // // // // })();

// // // // function callback(){
// // // //     console.log('now adding is succesfully');
// // // // }

// // // // const add = function(a,b,callback){
// // // //     const result = a + b
// // // //     console.log(result)
// // // //     callback()
// // // // }
// // // // add(7,8,callback)

// // // const add = function(a,b,gaurav){
// // //     var result = a + b;
// // //     console.log(result);
// // //     gaurav()
// // // }

// // // add(4,5,()=>console.log('Add is complted'))

// // var fs = require('fs');
// // var os= require('os');

// // var user = os.userInfo()
// // console.log(user)
// // console.log(user.username)

// // fs.appendFile('greating.txt', 'Hello dosto' + user.username + '!\n',()=>{
// //     console.log('File is Created')
// // })

// // const note = require('./note.js');

// // console.log('server file is  available');

// // var age = note.age

// // var result = note.addNumber(age+18,10)
// // console.log(age)
// // console.log('resulte is now',+result)

// var _= require('lodash')

// var data = ["gaurav","gaurav",1,2,3,5,1,2,1,8];
// var filter = _.uniq(data)
// console.log(filter)

// console.log(_.isString('gaurav'))

const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const Person = require("./models/Person.js");
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.post("/person", async (req, res) => {
  try {
    const data = req.body; //Assuming the request body contains the person data
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internet Server error" });
  }
});

app.listen(3000, () => {
  console.log("server is live");
});
