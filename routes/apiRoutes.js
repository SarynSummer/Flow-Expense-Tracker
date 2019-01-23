var db = require("../models");

// I'm just writing this here as a test

module.exports = function(app) {
  // Login and Password Check for index.handlebars
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
      if (getUsers) {
        console.log("User Found:");
        //var userid = getUsers.UserId;
        //console.log("The logged in user's id is:" + getUsers);
        res.json(getUsers);
      } else {
        console.log("No such user:");
        res.status(404).send("No such user");
      }
    });
  });

  // generates custom url for loggedIn.handlebars and passes it the user table reference
  app.get("/api/loggedIn/:userid", function(req, res) {
    var userId = req.param.userid;
    console.log(userId);
    var condition = {
      where: {
        UserUserId: userId
      }
    };
    db.Item.findAll(condition).then(function(getUsers) {
      res.json(getUsers);
    });
  });

  // get all items for a particular user (use on logged in page for particular user)
  // optional user tag to pull data for all users to create graphs
  // optional type tag to pull data for various types from a user to create graphs

  // app.get("/api/items/:userID?/:type?", function(req, res) {
  //   db.item.findAll({}).then(function(userBills) {
  //     res.json(userBills);
  //   });
  // });

  // Create a new user
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

  // Create a new item (only for logged in user)
  app.post("/api/items/:UserUserId/:Price/:Typeof/:Category", function(
    req,
    res
  ) {
    db.Item.create(
      {
        where: {
          UserUserId: userData.UserUserId
        }
      },
      {
        Price: req.body.Price,
        Typeof: req.body.Typeof,
        Category: req.body.Category
      }
    ).then(function(newItem) {
      console.log(newItem);
      res.status(404).send("Item Created");
    });
  });

  // Delete a item (only for logged in user)
  app.delete("/api/items/:ItemId", function(req, res) {
    db.Item.destroy({ where: { ItemId: req.params.ItemId } }).then(function() {
      res.json(refreshPage);
    });
  });
};
