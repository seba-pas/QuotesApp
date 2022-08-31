const axios = require("axios");

async function getAllQuotes(page) {
  try {
    const quotes = await axios.get(
      `https://quote-garden.herokuapp.com/api/v3/quotes?page=${page}`
    );
    console.log(quotes);
    return quotes;
  } catch (error) {
    console.log("error in controller", error);
  }
}



module.exports =  {
    getAllQuotes
}