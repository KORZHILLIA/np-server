const { Schema, model } = require("mongoose");

const tnnSchema = new Schema(
  {
    number: {
      type: String,
      minLength: 14,
      maxLength: 14,
      required: true,
      unique: true,
    },
    Status: String,
    StatusCode: {
      type: Number,
      default: 0,
    },
    CitySender: String,
    CityRecipient: String,
    WarehouseSender: String,
    WarehouseRecipient: String,
  },
  { versionKey: false, timestamps: true }
);

const TNN = model("TNN", tnnSchema);

module.exports = { TNN };
