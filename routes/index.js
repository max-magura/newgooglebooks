const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/index");

router.use("/api", apiRoutes);

const bookDbRoutes = require("./api/bookDb");
// const bookSearchRoutes = require("./bookSearch");

router.use("/bookDb",bookDbRoutes);

// DO NOT ADD UNTIL REACT
// If no API ROUTES are hit, send the react app
router.use(function (req, res)
{
   res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;