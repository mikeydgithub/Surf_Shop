// install and call dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")

// dotevn configuration to use in mongoose url 
dotenv.config();

// connect to the mongo data base
mongoose
    .connect(
        (process.env.MONGO_URL)
    )
    // create promie to the connection
    .then(() => console.log("DB Connection Success"))
    // catch errors if there is any
    .catch((err) => {
    console.log(err)
});

// get requests
app.use("/api/user", userRoute);

// start the server npm start
// if there is no port in our env file use 5000
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running!")
});