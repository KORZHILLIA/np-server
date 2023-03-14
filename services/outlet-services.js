const { Outlet } = require("../models/outlet-models");
const { getOutlets } = require("../outerAPI/api-np");

const getAllOutlets = async (city) => {
  const outlet = await Outlet.findOne({ city });
  if (!outlet) {
    const data = await getOutlets(city);
    const cityOutlets = data.map(
      ({ Number, Description, ShortAddress, Phone }) => ({
        Number,
        Description,
        ShortAddress,
        Phone,
      })
    );
    const newOutlet = await Outlet.create({ city, outlets: cityOutlets });
    return newOutlet;
  }
  return outlet;
};

module.exports = { getAllOutlets };
