
const connection = require("./connector");
const { data } = require('./data')

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
        connection.query("INSERT INTO test (title, comment, author, isOpen) VALUES (?,?,?,?);",[element.title, element.comment, element.author, element.isOpen], (err, result) => {
            if (err) {
                console.log(err)
            }
        }) 
    });
}
refreshAll()