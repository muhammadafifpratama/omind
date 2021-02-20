const { mysql } = require("../database")
const crypto = require('crypto')
const secret = 'omind';

module.exports = {
    register: (req, res) => {
        var connection = mysql.db
        req.body.password = crypto.createHmac('sha256', secret)
            .update(req.body.password)
            .digest('hex'); 1
        let sql = `select username from login where username = '${req.body.username}'`
        connection.query(sql, req.body, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            if (results.length > 0) {
                return res.status(500).send({ message: 'username already exist' })
            }
            sql = 'insert into login set ?'
            connection.query(sql, req.body, (err, results) => {
                if (err) {
                    return res.status(500).send(err)
                }
                res.status(200).send({ status: 'Registration successfull' })
            })
        });
    },
    auth: (req, res) => {
        var { username, password } = req.body;
        var connection = mysql.db
        password = crypto.createHmac('sha256', secret)
            .update(password)
            .digest('hex');
        var sql = `SELECT * FROM login WHERE username = ${connection.escape(username)}AND password = ${connection.escape(password)};`;
        connection.query(sql, (err, results) => {
            if (err) return res.status(500).send({ err, message: 'Database Error' })
            if (results.length === 0) {
                return res.status(500).send({ message: 'Username or Password Incorrect' })
            }
            res.status(200).send({ status: "login successfull" })
        })
    },
    changepassword: (req, res) => {
        var connection = mysql.db
        req.body.password = crypto.createHmac('sha256', secret)
            .update(req.body.password)
            .digest('hex'); 1
        let sql = `update login set password='${req.body.password}' where username='${req.body.username}'`
        connection.query(sql, req.body, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send({ status: "password changed" })
        });
    },
    delete: (req, res) => {
        var connection = mysql.db
        let sql = `delete from login where username='${req.body.username}'`
        connection.query(sql, req.body, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send({ status: "delete successfull" })
        });
    },
}