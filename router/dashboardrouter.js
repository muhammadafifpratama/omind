const express = require("express")
const { dashboard } = require("../controller")
const router = express.Router();

router.patch('/wallet', dashboard.isiwallet)
router.patch('/diamond', dashboard.isidiamond)
router.get('/', dashboard.dashboardview)

module.exports = router