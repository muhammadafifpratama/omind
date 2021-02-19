const { mysql } = require("../database")

module.exports = {
  getprofile: (req, res) => {
        var connection = mysql.db
        let sql = `select * from user where username = '${req.params.username}'`
        connection.query(sql, req.body, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        });
    },
}