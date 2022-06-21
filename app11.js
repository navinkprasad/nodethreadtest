const express=require('express')
const http=require('http')

const app=express()


let taskstatus=0;

const longTask= ()=>{
    taskstatus=0;
    for(let i=0;i<100000;i++){
        for(let j=0;j<100000;j++){
            //console.log(`${i},${j}`)
        }
    }
    console.log('done')
    taskstatus=1
}

// callbacks,event loops,promise async await.

app.get('/service1',async(req,res)=>{
    res.send('service1')
})
app.get('/service2',async(req,res)=>{
    //long waiting task
    setTimeout(() => {
        longTask()
    }, 1000);
  
    const interval=setInterval(() => {
        if(taskstatus==1){
            console.log('status=1')
            clearInterval(interval)
            res.status(200).send('service2')
        }else{
            console.log('status=0')
        }
    }, 1000);
    //await promiseLoop()
    //res.send('service2')
})

app.get('/service3',async(req,res)=>{
    res.send('service3')
})

app.listen('5000',console.log('Server is listening at port 5000...'))