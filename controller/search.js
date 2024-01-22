const axios = require("axios");

const { StatusCodes } = require("http-status-codes");

const search = async (req, res) => {
  const { query } = req.body;

  const baseUrl = `http://www.omdbapi.com/?apikey=b5d54e51&s=${query}`;
  try {
    const data = await axios.get(baseUrl);
    return res.status(StatusCodes.OK).json(data.data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = search;
// return res
//   .status(StatusCodes.INTERNAL_SERVER_ERROR)
//   .json("Something went wrong, try later");
