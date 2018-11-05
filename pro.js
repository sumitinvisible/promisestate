promise = new Promise((resolve,reject) =>{
  

reject();

});


promise.then(()=>{
console.log("hello ");


}).then(()=>{
  console.log("ghjj");
}).catch(()=>{
  console.log("failed");
})
