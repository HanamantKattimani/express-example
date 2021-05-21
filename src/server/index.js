const express = require('express')
const routeroObj = require('./Router')
const CORS = require("cors")
const envVariable = require("./config.js")

const app = express()

app.use(CORS())

app.use('/',routeroObj)

app.use((req,res,next) => { 
    res.status(404)
    res.json({Error:'Page not found'})
    res.end()
    next()
})

app.listen(envVariable.PORT)
console.log(`Server is started on `)