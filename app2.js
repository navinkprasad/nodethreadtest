const express = require("express");
const PORT = process.env.PORT || 5000
const cluster = require("cluster");
const os=require('os')
const totalCPUs = os.cpus().length;

const app = express();

app.get("/", (req, res) => {
    res.send(`Hello from app2  totalCPU-${totalCPUs} , plateform : ${os.platform}`);
  });
 
  app.get("/api/execute", function (req, res) {
    //long loop
    for(let i=0;i<10000;i++){
      for(let j=0;j<10000;j++){

      }
    }
    res.send(`done`);
  });
 
if (cluster.isMaster) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Master ${process.pid} is running`);
 
  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
 
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork(); //start new worker
  });
} else {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT} and processID ${process.pid}`);
  });
}