const { gptResponse } = require("../controllers/gptController");

const router = require("express").Router();

router.get("/hello", gptResponse);

module.exports = router;
