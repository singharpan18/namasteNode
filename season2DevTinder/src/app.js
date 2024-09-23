const express = require("express");

const app = express();

//create a sever
//app.listen(console.log("Server is successfull running"));


//write request handlers for /test, /hello
app.use("/test", (req, res) => {
    res.send("Hello from test server");
});

app.use("/hello", (req, res) => {
    res.send("hello from hello server....");
});

app.use("/", (req, res) => {
    res.send("from /....");
})


//listen to port no 7777
app.listen(7777, () => {
    console.log("Server is successfully listening on port 7777......")
});
