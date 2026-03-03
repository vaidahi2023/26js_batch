const submitHandler=(event)=> {
    
    event.preventDefault()
    var name=document.getElementById("name")
    console.log(name.value)

    var age=document.getElementById("age")


    var nameerror=document.getElementById("nameerror")
    var ageerror=document.getElementById("ageerror")

    if(name.value.length<2)
    {
        nameerror.innerHTML="your name is not valid"
    }
    else 
    {
        console.log(name.value)
        nameerror.innerHTML=""
    }
    checkage()
    function checkage()
    {
        console.log(age.value)
        if(Number(age.value)<0 || age.value==="")
        {
            ageerror.innerHTML="Enter valid age"
        }
        else 
        {
            console.log("age="+age.value)
            ageerror.innerHTML=""
        }
    }
}