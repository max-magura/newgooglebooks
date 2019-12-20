const db = require("../models");

// STANDARD CREATE READ UPDATE DELETE
// YOU CAN ALMOST COPY THIS VERBATIM
// READ
    // READ ALL
    // READ ONE
// CREATE 
// UPDATE
// DELETE

// ** make sure you change the model name after db.
// ** watch for the sort function it depends on the date column

module.exports = {

    findAll: function(req, res) {
        db.Book
          .find(req.query)
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Book
          .findById(req.params.id)
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        //console.log(req.body);
        //console.log(db);
        //console.log(db.Book);
        db.Book
          .create(req.body)
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        console.log("saveBookAPI got called")
        db.Book
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Book
          .findById({ _id: req.params.id })
          .then(dbBook => dbBook.remove())
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      }

};