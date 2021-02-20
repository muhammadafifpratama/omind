const { mysql } = require("../database")

module.exports = {
    isiwallet: (req, res) => {
        var connection = mysql.db
        let sql = `update user set wallet='${req.body.amount}' where iduser='${req.body.id}'`
        connection.query(sql, req.body, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send({ status: "wallet sudah bertambah Rp." + req.body.amount })
        });
    },
    isidiamond: (req, res) => {
        var connection = mysql.db
        let sql = `update user set diamond='${req.body.amount}' where iduser='${req.body.id}'`
        connection.query(sql, req.body, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send({ status: req.body.amount + " diamond has been added" })
        });
    },
    dashboardview: (req, res) => {
        var connection = mysql.db
        let sql = `select * from user where iduser=${req.body.id}`
        connection.query(sql, req.body, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        });
    },
}