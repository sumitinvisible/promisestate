promise = new Promise((resolve,reject) =>{
  

reject();  // or call resolve()

});


promise.then(()=>{
console.log("hello ");


}).then(()=>{
  console.log("ghjj");
}).catch(()=>{
  console.log("failed");
})

// then and catch both are present ,state will come as resolve in either case 
