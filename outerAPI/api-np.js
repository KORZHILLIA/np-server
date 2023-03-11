const axios = require("axios");
const makeNPQueryTemplate = require("../helpers/makeNPQueryTemplate");

const instance = axios.create({
  baseURL: "https://api.novaposhta.ua/v2.0/json/",
});
const getTNNStatus = async (tnnNumber) => {
  const { data } = await instance.post("/", makeNPQueryTemplate(tnnNumber));
  if (data.data[0].StatusCode) {
    data.data[0].StatusCode = Number(data.data[0].StatusCode);
  }
  return data.data[0];
};

module.exports = getTNNStatus;
