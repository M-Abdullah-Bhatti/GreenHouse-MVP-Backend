const { sendReportToRegulator, getReportsSentToRegulators } = require("../controllers/reportController");

const router = require("express").Router();

router.post("/updateSendToRegulators", sendReportToRegulator);
router.get("/getUpdateSendToRegulators", getReportsSentToRegulators);

module.exports = router;
