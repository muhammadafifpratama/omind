const express = require("express")
const { login } = require("../controller")
const router = express.Router();

router.get("/:username", login.getprofile)
module.exports = router

