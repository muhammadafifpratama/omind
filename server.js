let express = require('express');
let port = 3000;
let app = express()
let cors = require('cors')
let home = "use /mongo to acces the mongodb and /data to access mysql" 
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())

let { loginrouter,dashboardrouter } = require('./router')

// app.use('/tes', loginrouter, dashboardrouter)

app.get('/', (req, res) => res.send(home))

app.listen(port, () => console.log("if this shows up its running in port " + port))