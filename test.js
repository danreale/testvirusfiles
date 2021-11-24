const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const args = process.argv.slice(2);
const virusFilePath = args[0];

async function uploadFile(file) {
  console.log(file);
  var data = new FormData();
  data.append("assessmentZip", fs.createReadStream(file));

  var config = {
    method: "post",
    url: `https://exampleapp.com/api/upload`,
    headers: {
      ...data.getHeaders(),
    },
    data: data,
  };
  try {
    const response = await axios(config);
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}

async () => {
  await uploadFile(virusFilePath);
};
