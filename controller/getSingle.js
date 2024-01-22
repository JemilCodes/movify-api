const axios = require("axios");
const { StatusCodes } = require("http-status-codes");

const getSingle = async (req, res) => {
  const { Title } = req.body;

  const baseUrl = `http://www.omdbapi.com/?apikey=b5d54e51&t=${Title}`;
  try {
    const data = await axios.get(baseUrl);
    return res.status(StatusCodes.OK).json(data.data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getSingle;
