const { Router } = require("express");
const {
  getAllQuotes,
  randomQuote,
  authorQuotes,
  genreQuotes,
  searchQuotes,
} = require("../quotesControllers");
const router = Router();

//-------------|GET ALL QUOTES |----------

router.get("/", async (req, res) => {
  try {
    const page = req.query.page ? req.query.page : 1;
    let allQuotes = await getAllQuotes(page);

    res.status(200).json(allQuotes);
  } catch (error) {
    res.status(400).send("error en route", error);
  }
});

//--------------- | GET RANDOM QUOTES |------------

router.get("/random", async (req, res) => {
  try {
    const quote = await randomQuote();
    res.status(200).json(quote);
  } catch (error) {
    res.status(400).send("error en la ruta de random ", error);
  }
});

//-----------------| GET AUTHOR QUOTES |-------------
router.get("/authors/:author", async (req, res) => {
  try {
    const authorName = req.params.authorName;
    const search = await authorQuotes(authorName);
    const info = search.data;
    res.status(200).json(info);
  } catch (error) {
    res.status(400).send("error in author quotes route", error);
  }
});

//--------------| GENRE QUOTES |---------
router.get("/genres/:genre", async (req, res) => {
  try {
    const genre = req.params.genre;
    if (!genre) res.status(400).send("no genre ");
    const search = await genreQuotes(genre);
    const info = search.data;
    res.status(200).json(info);
  } catch (error) {
    res.status(400).send("error in genres routes", error);
  }
});

//-------------| SEARCH QUOTES |-----------
//searchKeyword

router.get("/search/:searchKeyword", async (req, res) => {
  try {
    const searchKeyword = req.params.searchKeyword;
    if (!searchKeyword) res.status(400).send("no searchKeyword ");
    const search = await searchQuotes(searchKeyword);
    const info = search.data;
    res.status(200).json(info);
  } catch (error) {
    res.status(400).send("error in search", error);
  }
});

module.exports = router;
