const { sendReportToRegulator } = require("../controllers/reportController");

const router = require("express").Router();

router.put("/updateSendToRegulators", sendReportToRegulator);

module.exports = router;
