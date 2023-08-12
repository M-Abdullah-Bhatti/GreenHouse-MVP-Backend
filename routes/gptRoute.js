const { gptResponse } = require("../controllers/gptController");

const router = require("express").Router();

router.post("/hello", gptResponse);

module.exports = router;
