const { Router } = require("express");
const quotesRoutes = require("./quotesRoutes");

const router = Router();
router.get("/", (req, res) => {
  res.status(200).send("Pedido a barra");
});
router.use("/quotes", quotesRoutes);

module.exports = router;
