const express = require("express");
const createTryCatchWrapper = require("../middlewares/createTryCatchWrapper");
const outletControllers = require("../controllers/outlet-controllers");

const router = express.Router();

router.get("/:city", createTryCatchWrapper(outletControllers.getOutlets));

module.exports = router;
