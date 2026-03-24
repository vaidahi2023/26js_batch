const sum=()=>
{
    return 100;
}
const printData=()=>
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve("data is fetch")
        },2000)
    })
}

printData().then((data)=>
{
    console.log(data)
    console.log(sum())
}).catch((err)=>
{
    console.log(err)
})