var users=[
    {
        id:1,
        name:"riya",
        age:23,
        salary:40000
    },
     {
        id:2,
        name:"mittal",
        age:23,
        salary:50000
    },
    {
        id:4,
        name:"het",
        age:28,
        salary:30000
    },
    {
        id:6,
        name:"diya",
        age:15,
        salary:10000
    }
];

const parent=document.getElementById("parent")
const table=document.createElement('table')
var thead=document.createElement("thead")
var tbody=document.createElement("tbody")
var tr=document.createElement("tr")
table.border="1px"
var heading=["id","name","age","salary"]

heading.forEach(h => {
    var th=document.createElement("th")
    th.textContent=h
    tr.appendChild(th)
});
thead.appendChild(tr)
table.appendChild(thead)



// users.forEach(h => {
//     var td=document.createElement("td")
//     td.textContent=h
//     tr.appendChild(td)
// });

// tbody.appendChild(tr)
// table.appendChild(tbody)

parent.appendChild(table)
