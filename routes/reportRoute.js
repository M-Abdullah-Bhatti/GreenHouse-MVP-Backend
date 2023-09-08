const { sendReportToRegulator } = require("../controllers/reportController");

const router = require("express").Router();

router.post("/updateSendToRegulators", sendReportToRegulator);

module.exports = router;
