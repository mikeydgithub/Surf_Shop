// use router package for express
const router = require("express").Router();

// get method
router.get("/usertest", (req, res) => {
    res.send("user test is succesfull")
});

// post method
router.post("userposttest", (req, res) => {
    const username = req.body.username
    console.log(username);
})

module.exports = router