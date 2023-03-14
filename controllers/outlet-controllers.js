const { getAllOutlets } = require("../services/outlet-services");

const getOutlets = async (req, res) => {
  const { city } = req.params;
  const outlets = await getAllOutlets(city);
  res.json(outlets);
};

module.exports = { getOutlets };
