const submitHandler=(event)=>{

    event.preventDefault();

    var name=document.getElementById("name")
    console.log(name.value)

    var age=document.getElementById("age")
    console.log(age.value)

    var color=document.getElementById("color")
    console.log(color.value)

    var nameoutput=document.getElementById("nameo")
    nameoutput.innerHTML=name.value
    nameoutput.style.backgroundColor=color.value

    var ageoutput= document.getElementById("ageo")
    ageoutput.style.backgroundColor=color.value
    ageoutput.innerHTML=age.value
}