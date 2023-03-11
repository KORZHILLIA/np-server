const { getTNN, getTNNInfo } = require("../services/tnn-services");

const getTrackInfo = async (req, res) => {
  const { tnnNumber } = req.params;
  const tnn = await getTNN({ number: tnnNumber });
  if (!tnn.StatusCode) {
    const tnnInfo = await getTNNInfo(tnn.number);
    res.json(tnnInfo);
    return;
  }
  res.json(tnn);
};

module.exports = { getTrackInfo };
