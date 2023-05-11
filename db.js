const mysql = require('mysql2');

const {PASSWORD_DB, NAME_DB} = require('./config')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: PASSWORD_DB,
    database: NAME_DB,
});

function getComments(){
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM Comment', (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
                console.log(results)
            }
        });
    });
}

function saveComment(content){
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO Comment (Comment) VALUES (?)', [content], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {connection, getComments, saveComment};