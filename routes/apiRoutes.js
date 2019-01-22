var db = require("../models");

// I'm just writing this here as a test

module.exports = function(app) {
  // Get all users for login check
  app.get("/api/users/:userName/:Password", function(req, res) {
    var userName = req.params.userName;
    var Password = req.params.Password;
    console.log(userName);
    console.log(Password);
    var condition = {
      where: {
        userName: userName,
        Password: Password
      }
    };
    db.User.findOne(condition).then(function(getUsers) {
      console.log(getUsers);
      if (getUsers) {
        res.json(getUsers);
      } else {
        console.log("No such user:");
        res.status(404).send("No such user");
      }
    });
  });

  // get all bills for a particular user (use on logged in page for particular user)
  // userID is optional so that all bills for all users can be pulled

  // app.get("/api/bills/:userID?", function (req, res) {
  //   db.bill.findAll({}).then(function (userBills) {
  //     res.json(userBills);
  //   });
  // });

  // get all items for a particular user (use on logged in page for particular user)
  // optional user tag to pull data for all users to create graphs
  // optional type tag to pull data for various types from a user to create graphs

  // app.get("/api/items/:userID?/:type?", function(req, res) {
  //   db.item.findAll({}).then(function(userBills) {
  //     res.json(userBills);
  //   });
  // });

  // Create a new bill (for a specific user)
  app.post("/api/users", function(req, res) {
    db.User.create({
      userName: req.body.userName,
      Password: req.body.Password
    }).then(function(newUser) {
      if (newUser) {
        res.json(newUser);
      } else {
        console.log("User already exists:");
        res.status(404).send("User already exists");
      }
    });
  });

  // Delete a bill (only for logged in user)
  // app.delete("/api/bills/:id", function(req, res) {
  //   db.bill.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(refreshPage);
  //   });
  // });
};
