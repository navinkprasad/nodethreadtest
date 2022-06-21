const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000
 
app.get("/", (req, res) => {
  res.send("Hello World! app1");
});
 
app.get("/api/:n", function (req, res) {
  let n = parseInt(req.params.n);
  let count = 0;
 
  if (n > 5000000000) n = 5000000000;
 
  for (let i = 0; i <= n; i++) {
    count += i;
  }
 
  res.send(`Final count is ${count}`);
});
 
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});