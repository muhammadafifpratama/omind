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
    addmateri: (req, res) => {
        var connection = mysql.db
        let sql = 'insert into materi set ?'
        connection.query(sql, req.body, (err, results) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },
    materisaya: (req, res) => {
        var connection = mysql.db
        let sql = `select * from materi where iduser='${req.body.id}'`
        connection.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },
    deletemateri: (req, res) => {
        var connection = mysql.db
        let sql = `delete from materi where idmateri='${req.body.id}'`
        connection.query(sql, (err, results) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },
    terakhir: (req, res) => {
        var connection = mysql.db
        let sql = 'insert into recent set ?'
        connection.query(sql, req.body, (err, results) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },
    terakhir_dipelajari: (req, res) => {
        var connection = mysql.db
        let sql = `select * from recent where iduser='${req.body.id}'`
        connection.query(sql, req.body, (err, results) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },
    delete_recent: (req, res) => {
        var connection = mysql.db
        let sql = `delete from recent where idrecent=${req.body.id}`
        connection.query(sql, req.body, (err, results) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },
    paket: (req, res) => {
        var connection = mysql.db
        let sql = 'insert into paket set ?'
        connection.query(sql, req.body, (err, results) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },
    liatpaket: (req, res) => {
        var connection = mysql.db
        let sql = `select * from paket where iduser='${req.body.id}'`
        connection.query(sql, req.body, (err, results) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },
    deletepaket: (req, res) => {
        var connection = mysql.db
        let sql = `delete from paket where idpaket=${req.body.id}`
        connection.query(sql, req.body, (err, results) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },
}