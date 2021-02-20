const express = require("express")
const { login } = require("../controller")
const router = express.Router();

router.post("/register", login.register)
router.get("/", login.auth)
router.patch('/change', login.changepassword)
router.delete('/delete', login.delete)

module.exports = router

