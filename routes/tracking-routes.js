const express = require("express");
const { validateBody, createTryCatchWrapper } = require("../middlewares");
const { schemas } = require("../models/tnn-models");
const tnnControllers = require("../controllers/tnn-controllers");

const router = express.Router();

router.get(
  "/:tnnNumber",
  // validateBody(schemas.addNewTnnSchema),
  createTryCatchWrapper(tnnControllers.getTrackInfo)
);

// router.delete(
//   "/remove/:bookId",
//   authenticate,
//   createTryCatchWrapper(bookControllers.remove)
// );

module.exports = router;
