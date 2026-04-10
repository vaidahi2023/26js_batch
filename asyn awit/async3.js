var users = [
        {
            id: 1,
            name: "riya",
            age: 25
        },
        {
            id: 2,
            name: "diya",
            age: 25
        },
        {
            id: 3,
            name: "priya",
            age: 25
        }
    ]

const fetchusers=()=>{

        return new Promise((resolve,reject)=>
        {
            setTimeout(() => {
                    resolve(users)
            }, 2000);
        })
}

const printusers= async ()=>
{
    const main=document.getElementById("main")
    const loading=document.getElementById("loading")
    loading.innerHTML="loading....."
    const allusers= await fetchusers();

    const searchtag=document.getElementById("searchtag")
    const searchinput=document.createElement("input")
    searchinput.setAttribute("type","text")
    searchinput.setAttribute("id","search")
    searchtag.appendChild(searchinput)


    searchinput.addEventListener("keyup",()=>
    {
        const searchvalue=document.getElementById("search").value 
        searchvalue.toLowerCase()
        const filteredusers=allusers.filter((user)=>
        {
            return user.name.toLowerCase().includes(searchvalue)
        })
        console.log(filteredusers)
        main.innerHTML=""
        for(let i=0;i<filteredusers.length;i++)
        {
            const p=document.createElement("p")
            p.innerHTML=filteredusers[i].id + " "+ filteredusers[i].name;
            main.appendChild(p)
        }
    })

    for(let i=0;i<allusers.length;i++)
    {
        const p=document.createElement("p")
        p.innerHTML=allusers[i].id + " "+ allusers[i].name;
        main.appendChild(p)
    }
}

printusers()