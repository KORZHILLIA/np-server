const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const trackingRouter = require("./routes/tracking-routes");

app.use(cors());
app.use(express.json());

app.use("/api/tracking", trackingRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, _, res, next) => {
  const { status = 500, message } = err;
  res.status(status).json({ message });
});

module.exports = app;
