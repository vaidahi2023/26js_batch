const generateexam=()=>{

    console.log("exam generating")
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve({
                message:"exam generated",
                exam:
                {
                    id:1,
                    name:"maths",
                    marks:30,
                    ques:2
                },
            })
        },2000)
    })
}

const generateques=(examdata)=>{

    console.log("generating questions")
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            resolve(
            {
                message:"questions is generated",
                examname:examdata.name,
                exam_marks:examdata.marks,
                ques:[
                    {
                        id:1,
                        que:"what is 1+2",
                        ans:3
                    },
                    {
                        id:2,
                        que:"what is 30*3",
                        ans:90
                    }
                ]

            })
        },2000)
    })
}


const startexam =()=>
{
    console.log("exam start")
    generateexam().then((data)=>{

        console.log("question is generating")
        generateques(data.exam).then((ques)=>{
            console.log("quesitions",ques)
        })
    })
}

startexam()