// require dependencies and make port
const express = require("express");
const routes = require("./routes")
const app = express();
const PORT = process.env.PORT || 3001;


// use express, use routes
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.statis("public"));
app.use(routes);
// do the listening thing 

app.listen(PORT, () => {
    console.log(`Now listening @ http://localhost:${PORT}`)
})