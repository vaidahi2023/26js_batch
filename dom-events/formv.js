function namelen()
{
    var name=document.getElementById("name")
    var nameerror=document.getElementById("nameerror")
    validatelen(name.value ,nameerror,"name",2,20)
}

function emaillen()
{
    var email=document.getElementById("email")
    var emailerror=document.getElementById("emailerror")
    validatelen(email.value ,emailerror,"email",10,35)
}

function validatelen(param,error,nameelement,min,max)
{

        if(param!==undefined)
        {
            if(param.trim().length<min || param.trim().length>max)
            {
                error.innerHTML=nameelement+"must be at least "+min
            }
            else 
            {
                error.innerHTML=""
            }
        }
}