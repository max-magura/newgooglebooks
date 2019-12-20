const router = require("express").Router();
const bookDbRoutes = require("./bookDb");
// const bookSearchRoutes = require("./bookSearch");

router.use("/bookDb",bookDbRoutes);
// router.use("/bookSearch",bookSearchRoutes);


module.exports = router;

