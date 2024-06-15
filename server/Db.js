const mysql = require("mysql")

 const Db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Harish@9190",
    database: "blog"
     
})


module.exports = Db



