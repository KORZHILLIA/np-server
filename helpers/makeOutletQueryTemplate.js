const { NP_KEY } = process.env;

const makeOutletQueryTemplate = (city) => {
  return {
    apiKey: NP_KEY,
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityName: city,
      Page: "1",
      Limit: "500",
      Language: "UA",
    },
  };
};

module.exports = makeOutletQueryTemplate;
