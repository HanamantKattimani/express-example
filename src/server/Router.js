const express = require('express')
const router = express.Router()
const db = require("./db.js")
console.log(db)

router.use(express.json())
router.use(express.urlencoded({extended:false})) 

router.get('/welcome',(req, res) => {
    console.log("Welcome")
    res.send({"msg":"welcome"})
})

module.exports = router