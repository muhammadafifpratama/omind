let express = require('express');
let port = 3000;
let app = express()
let cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())

let { login, dashboard } = require('./router')

app.use('/login', login)
app.use('/home', dashboard)

app.get('/', (req, res) => { res.send(`<h1>the backend is now running</h1>`) })

app.listen(port, () => console.log("if this shows up its running in port " + port))