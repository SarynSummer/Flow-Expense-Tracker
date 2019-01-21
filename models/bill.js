module.exports = function(sequelize, DataTypes) {
  var Bill = sequelize.define("Bill", {
    billId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },

    totalBillItems: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: true
    },
    BillExpense: {
      type: DataTypes.FLOAT
    },
    BillDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  Bill.associate = function(models) {
    Bill.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  Bill.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Bill.hasMany(models.Item, {
      onDelete: "cascade"
    });
  };
  return Bill;
};
