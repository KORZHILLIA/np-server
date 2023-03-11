const { Schema, model } = require("mongoose");
const Joi = require("joi");

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

const addNewTnnSchema = Joi.object({
  number: Joi.string().min(14).max(14).required(),
});

const TNN = model("TNN", tnnSchema);

const schemas = { addNewTnnSchema };

module.exports = { schemas, TNN };
