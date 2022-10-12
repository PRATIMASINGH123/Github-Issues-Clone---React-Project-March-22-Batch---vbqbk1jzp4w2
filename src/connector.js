var mysql = require('mysql');
const { data } = require('./data')


var connection = mysql.createConnection({
    host: "database",
    user: "database",
    password: "abc",
    database: "test",
    multipleStatements: true
});


connection.connect(function (err) {
    if (err) return console.log("failed to connect to the database/server", err);
    else return console.log("connection establish with Datebase!!!!");
});



const refreshAll = async () => {

    await connection.query("DROP TABLE IF EXISTS test;",
        (err, result) => {
            if (err) {
                console.log(err)
            }
        });

    await connection.query("CREATE TABLE test (id INT AUTO_INCREMENT NOT NULL, title varchar(255) NOT NULL, comment TEXT(65535), author varchar(255) NOT NULL, date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, isOpen TINYINT(1) DEFAULT 1, primary key (id));",
        (err, result) => {
            if (err) {
                console.log(err)
            }
        });

    await data.forEach(element => {
        connection.query("INSERT INTO test (title, comment, author, isOpen) VALUES (?,?,?,?);", [element.title, element.comment, element.author, element.isOpen], (err, result) => {
            if (err) {
                console.log(err)
            }
        })
    });
}
refreshAll()


module.exports = connection;
