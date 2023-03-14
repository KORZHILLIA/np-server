const axios = require("axios");
const makeTNNQueryTemplate = require("../helpers/makeTNNQueryTemplate");
const makeOutletQueryTemplate = require("../helpers/makeOutletQueryTemplate");

const instance = axios.create({
  baseURL: "https://api.novaposhta.ua/v2.0/json/",
});

const getTNNStatus = async (tnnNumber) => {
  const { data } = await instance.post("/", makeTNNQueryTemplate(tnnNumber));
  if (!data.success) {
    return data;
  }
  if (data.data[0].StatusCode) {
    data.data[0].StatusCode = Number(data.data[0].StatusCode);
    return data.data[0];
  }
  return data.data[0];
};

const getOutlets = async (city) => {
  const { data } = await instance.post("/", makeOutletQueryTemplate(city));
  if (!data.success) {
    return data;
  }
  return data.data;
};

module.exports = { getTNNStatus, getOutlets };
