const router = require("express").Router();
const bookDbController = require("../../controllers/bookDbController");


// MATCHES with /api/book
router.route("/")
    .get(bookDbController.findAll)
    .post(bookDbController.create);


// MATCHES with /api/book/:id
router.route("/:id")
    .get(bookDbController.findById)
    .put(bookDbController.update)
    .delete(bookDbController.remove);

module.exports = router;
