const express = require("express")
const { login } = require("../controller")
const router = express.Router();

router.post("/register", login.register)
router.get("/",login.auth)
module.exports = router

