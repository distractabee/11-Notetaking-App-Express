// require dependencies and make port
const express = require("express");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes")
const app = express();
const PORT = process.env.PORT || 3001;


// use express, use routes
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRoutes);
// do the listening thing 

app.listen(PORT, () => {
    console.log(`Now listening @ http://localhost:${PORT}`)
})