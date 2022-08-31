const { Router } = require("express");
const quotesRoutes = require("./quotesRoutes");

const router = Router();

router.use("/quotes", quotesRoutes);

module.exports = router;
