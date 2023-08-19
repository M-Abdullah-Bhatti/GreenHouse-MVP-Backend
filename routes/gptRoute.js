const { gptResponse } = require("../controllers/gptController");

const router = require("express").Router();

router.post("/prompt", gptResponse);

module.exports = router;
