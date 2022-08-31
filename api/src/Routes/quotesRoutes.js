const { Router } = require("express");
const { getAllQuotes } = require("../quotesControllers");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const page = req.query.page ? req.query.page : 1;
    let allQuotes = await getAllQuotes(page);
    res.status(200).json(allQuotes);
  } catch (error) {
    res.status(400).send('error en route', error)
  }
});

module.exports = router;

