module.exports = function(sequelize, DataTypes) {
  var Room = sequelize.define("Room", {
    // Giving the  model a name of type STRING
    roomType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: { type: DataTypes.STRING, allowNull: false },
    imgUrl: { type: DataTypes.STRING, allowNull: false },
    roomCost: { type: DataTypes.INTEGER, allowNull: false }
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
