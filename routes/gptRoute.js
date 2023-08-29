const {
  gptResponse,
  gptAnotherResponse,
} = require("../controllers/gptController");

const router = require("express").Router();

router.post("/prompt", gptResponse);
router.post("/hello", gptAnotherResponse);

module.exports = router;
