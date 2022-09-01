const axios = require("axios");
const API_URL = "https://quote-garden.herokuapp.com/";
const API_VERSION = "api/v3/";

//--------------| ALL QUOTES | ----------------//

async function getAllQuotes(page) {
  try {
    const quotes = await axios.get(
      `https://quote-garden.herokuapp.com/api/v3/quotes?page=${page}`
    );
    const info = quotes.data.data;

    const mapeo = info?.map((e) => {
      return {
        id: e._id,
        quote: e.quoteText,
        author: e.quoteAuthor,
        genre: e.quoteGenre,
      };
    });
    console.log(mapeo);
    return mapeo;
  } catch (error) {
    console.log("error in controller", error);
  }
}

//----------- | RANDOM |-------------------//
async function randomQuote() {
  try {
    const quote = await axios.get(
      `https://quote-garden.herokuapp.com/api/v3/quotes/random`
    );
    const info = quote.data.data;
    console.log(info);
    const json = info?.map((e) => {
      return {
        id: e._id,
        quote: e.quoteText,
        author: e.quoteAuthor,
        genre: e.quoteGenre,
      };
    });
    return json[0];
  } catch (error) {
    console.log("error in random quote ", error);
  }
}

//---------| AUTHOR QUOTES | -----------------//

async function authorQuotes(authorName, page = 1) {
  try {
    const authorQuotes = await axios.get(
      `${API_URL}${API_VERSION}authors/${authorName}?page=${page}`
    );
    const info = authorQuotes?.data;

    console.log(info);
    return info;
  } catch (error) {
    console.log("error in author quotes ", error);
  }
}

//----------------------------------| GENRE QUOTES |-------------------------//

async function genreQuotes(genre, page = 1) {
  try {
    const genreQuotes = await axios.get(
      `${API_URL}${API_VERSION}genre/${genre}?page=${page}`
    );

    const info = genreQuotes?.data;
    console.log(info);
    return info;
  } catch (error) {
    console.log("error in genre quotes", error);
  }
}

/////-----------------| SEARCH QUOTES |------
async function searchQuotes(searchKeyword, page = 1) {
  try {
    const quotes = await axios.get(
      `${API_URL}${API_VERSION}quotes/${searchKeyword}?page=${page}`
    );
    const info = quotes?.data;
    console.log(info);
    return info;
  } catch (error) {
    console.log("error en el search quote ", error);
  }
}

module.exports = {
  getAllQuotes,
  randomQuote,
  authorQuotes,
  genreQuotes,
  searchQuotes,
};
