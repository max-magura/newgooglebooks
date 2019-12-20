const router = require("express").Router();
const bookDbRoutes = require("./bookDb");
// const bookSearchRoutes = require("./bookSearch");

router.use("/book",bookDbRoutes);
// router.use("/bookSearch",bookSearchRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;

