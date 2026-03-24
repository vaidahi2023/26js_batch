//resolve and reject are the two functions that are passed to the promise constructor

const p=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("it is promise")
        reject()
    },1000)
})
p.then(function()
{
    console.log("promise is called...............")
})

new Promise(function(resolve,reject){
 setTimeout(function(){
        console.log("it is promise2")
        resolve()
        reject()
    },1000)
}).then(function(){
    console.log("promise2 is resolved..............")
},function(){
    console.log("promise2 is rejected...............")
})
