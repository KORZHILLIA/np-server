const express = require("express");
const createTryCatchWrapper = require("../middlewares/createTryCatchWrapper");
const tnnControllers = require("../controllers/tnn-controllers");

const router = express.Router();

router.get("/:tnnNumber", createTryCatchWrapper(tnnControllers.getTrackInfo));

module.exports = router;
