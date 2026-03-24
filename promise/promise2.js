const placeorder=()=>
{
    console.log("order is being to placed")
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve({
                message:"order is sucessfully placed",
                orderId:1,
                amount:600
            })
        },3000)
    })
}

const payment=(data)=>
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve({
                message:"payment is sucessfully ",
                paymentId:1234567,
                amount:data.amount
            })
        },3000)
    })
}


placeorder().then((res)=>{
    console.log(res)
    payment(res).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}).catch((err)=>
{
    console.log(err)
})