const express = require("expres");
const app = express();

console.log("hello");

app.listen("3000", ()=>{
    console.log("Server is running in 3000 Port");
})