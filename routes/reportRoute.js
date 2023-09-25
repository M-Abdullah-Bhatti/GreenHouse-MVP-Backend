const {
  sendReportToRegulator,
  getReportsSentToRegulators,
  getAllPendingReports,
  getDetailsOfSingleReport,
  changeStatusToReview,
  assignCase,
  closeCase,
  getAllUnderReviewReports,
  getAllReviewedReports,
  updateCase,
} = require("../controllers/reportController");

const router = require("express").Router();

router.post("/updateSendToRegulators", sendReportToRegulator);
router.get("/getUpdateSendToRegulators", getReportsSentToRegulators);
router.get("/getPendingReports", getAllPendingReports);
router.get("/getSingleReportDetail", getDetailsOfSingleReport);
router.get("/getAllUnderReviewReports", getAllUnderReviewReports);
router.get("/getAllReviewedReports", getAllReviewedReports);
router.put("/changeStatusToReview", changeStatusToReview);
router.put("/assignCase", assignCase);
router.put("/closeCase", closeCase);
router.put("/updateCase", updateCase);

module.exports = router;
