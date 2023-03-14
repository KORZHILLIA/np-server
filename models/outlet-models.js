const { Schema, model } = require("mongoose");

const outletSchema = new Schema(
  {
    city: String,
    outlets: [
      {
        Number: String,
        Description: String,
        ShortAddress: String,
        Phone: String,
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Outlet = model("Outlet", outletSchema);

module.exports = { Outlet };
