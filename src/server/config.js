const dotenv=require('dotenv')
const path=require('path')
dotenv.config({
    path:path.join(__dirname,'../.env')
})

console.log(process.env.PORT)

module.exports={
    PORT:process.env.PORT,
    DB_NAME:process.env.DB_NAME,
    DB_PASS:process.env.DB_PASS,
    DB_USER:process.env.DB_USER,
    DB_HOST:process.env.DB_HOST,
}