const express = require("express")
const { dashboard } = require("../controller")
const router = express.Router();

router.patch('/wallet', dashboard.isiwallet)
router.patch('/diamond', dashboard.isidiamond)
router.get('/', dashboard.dashboardview)
router.post("/addmateri", dashboard.addmateri)
router.get("/materi", dashboard.materisaya)
router.delete("/hapusmateri", dashboard.deletemateri)
router.post("/addrecent", dashboard.terakhir)
router.get("/recent", dashboard.terakhir_dipelajari)
router.delete("/deleterecent", dashboard.delete_recent)
router.post("/paket", dashboard.paket)
router.get("/paketsaya", dashboard.liatpaket)
router.delete("/deletepaket", dashboard.deletepaket)

module.exports = router