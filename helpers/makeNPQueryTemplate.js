const { NP_KEY } = process.env;

const makeNPQueryTemplate = (tnnNumber) => {
  return {
    apiKey: NP_KEY,
    modelName: "TrackingDocument",
    calledMethod: "getStatusDocuments",
    methodProperties: {
      Documents: [
        {
          DocumentNumber: tnnNumber,
        },
      ],
    },
  };
};

module.exports = makeNPQueryTemplate;
