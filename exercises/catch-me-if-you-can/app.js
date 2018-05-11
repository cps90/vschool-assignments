// function sum (x, y){
//     try {
//         if(typeof x !== "number"){
//             throw "input must be a number"
//         }
//         if (typeof y !== "number"){
//             throw "input must be a number"
//         }
//     }
//     catch(err){
//         return err
//     }
//   return x + y
// }
// // console.log(sum(1, "b"));
//
// //1b
// try{
//   console.log(sum("1", "2"))
// }
// catch(err){
//   console.log(err)
// }

//2a
var user = {username: "sam", password: "123abc"};

function login(username, password){
  try {
    if (username !== user.username){
      throw "incorrect username"
    }
    if (password !== user.password){
      throw "incorrect password"
    }
  }
  catch(err) {
    return err
  }
  return "login succussful"
}

// console.log(login("sam", "123abc"))

//2b
try {
  console.log(login('nate', '123abc'));
}
catch(err){
  console.log(err);
}
