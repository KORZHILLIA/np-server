const { TNN } = require("../models/tnn-models");
const getTNNStatus = require("../outerAPI/api-np");

const tnnFinalCodes = [2, 3, 9, 10, 11, 102, 103, 105, 106, 111];

const getTNN = async (data) => {
  const presentTNN = await TNN.findOne({ ...data });
  if (presentTNN) {
    return presentTNN;
  }
  const newTNN = await TNN.create({ ...data });
  return newTNN;
};

const getTNNInfo = async (tnnNumber) => {
  const {
    Status,
    StatusCode,
    WarehouseSender,
    WarehouseRecipient,
    CitySender,
    CityRecipient,
  } = await getTNNStatus(tnnNumber);
  const response = {
    Status,
    StatusCode,
    WarehouseSender,
    WarehouseRecipient,
    CitySender,
    CityRecipient,
  };
  if (tnnFinalCodes.includes(StatusCode)) {
    const finalTNN = await TNN.findOneAndUpdate(
      { number: tnnNumber },
      { ...response },
      { new: true }
    );
    return finalTNN;
  }
  const tnn = { ...response, tnn: tnnNumber };
  return tnn;
};

module.exports = { getTNN, getTNNInfo };
