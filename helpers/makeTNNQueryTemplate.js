const { NP_KEY } = process.env;

const makeTNNQueryTemplate = (tnnNumber) => {
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

module.exports = makeTNNQueryTemplate;
