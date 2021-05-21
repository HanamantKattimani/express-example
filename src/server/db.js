const envVariables = require("./config")
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     :  envVariables.DB_HOST,
  user     :  envVariables.DB_USER,
  
  password :  envVariables.DB_PASS,
  database :  envVariables.DB_NAME,
});

connection.connect();

const users = `create table if not exists users(id int primary key auto_increment, name varchar(100))`

const createTable = (query) => {
    return new Promise((resolve, reject) => {
        connection.query(query, function (error, results, fields) {
            if(results) {
                resolve(results)git push --set-upstream origin master
            }
            if (error) {
                reject(error)
            }
        })
    })
}

createTable(users)
.then(data=>{console.log(data)})
.catch(error=>{console.log(error)})


const insertIntoTable = (query) => {
    return new Promise((resolve, reject) => {
        connection.query(`insert into users(name) values(?)`,["lakan"], function (error, results, fields) {
            if(results) {
                resolve(results)
            }
            if (error) {
                reject(error)
            }
        })
    })
}

insertIntoTable()
.then(data=>{console.log(data)})
.catch(error=>{console.log(error)})


const selectData = (query) => {
    return new Promise((resolve, reject) => {
        connection.query(`select * from users`, (error, results, fields) => {
            if(results) {
                resolve(results)
            }
            if (error) {
                reject(error)
            }
        })
    })
}

selectData()
.then(data=>{console.log(data)})
.catch(error=>{console.log(error)})








console.log(envVariables.PORT, envVariables.DB_HOST, envVariables.DB_USER, envVariables.DB_NAME, envVariables.DB_PASS)


 