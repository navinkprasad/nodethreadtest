const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000
 
app.get("/", (req, res) => {
  res.send("Hello from app1");
});
 
app.get("/api/execute", function (req, res) {
  for(let i=0;i<10000;i++){
    for(let j=0;j<10000;j++){

    }
  }
  res.send(`Done`);
});
 
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});