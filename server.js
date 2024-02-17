// // // // function add(a,b){
// // // //     return a + b
// // // // }

// // // // var add = (a, b) => {
// // // //   return a + b;
// // // // };
// // // // const result = add(6, 4);
// // // // console.log(result)
// // // (function () {
// // //   console.log("gaurav singh");
// // // })();


// // function callback(){
// //     console.log('now adding is succesfully');
// // }

// // const add = function(a,b,callback){
// //     const result = a + b
// //     console.log(result)
// //     callback()
// // }
// // add(7,8,callback)

// const add = function(a,b,gaurav){
//     var result = a + b;
//     console.log(result);
//     gaurav()
// }

// add(4,5,()=>console.log('Add is complted'))

var fs = require('fs');
var os= require('os');

var user = os.userInfo()
console.log(user)
console.log(user.username)

fs.appendFile('greating.txt', 'Hello dosto' + user.username + '!\n',()=>{
    console.log('File is Created')
})