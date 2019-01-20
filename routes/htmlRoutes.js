var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load example page and pass in an example by id
  app.get("/user/:id", function(req, res) {
    db.user.findOne({ where: { id: req.params.id } }).then(function(userData) {
      res.render("loggedIn", {
        userData: userData,
        UserId: UserId,
        bill: bill,
        item: item
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
