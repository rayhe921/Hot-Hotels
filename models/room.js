module.exports = function(sequelize, DataTypes) {
  var Room = sequelize.define("Room", {
    // Giving the  model a name of type STRING
    roomType: {
      type: DataTypes.STRING
    },
    date: DataTypes.DATE,
    roomQuantity: DataTypes.INTEGER
  });
  Room.associate = function(models) {
    Room.belongsTo(models.Client, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Room;
};
