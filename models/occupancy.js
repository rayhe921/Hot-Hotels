module.exports = function(sequelize, DataTypes) {
  var Occupancy = sequelize.define("Occupancy", {
    date: DataTypes.DATE,
    occupied: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Occupancy.associate = function(models) {
    //Associating occupancy with room via foreign key
    Occupancy.belongsTo(models.Room, {
      foreignKey: {
        allowNull: false
      }
    });

    Occupancy.belongsTo(models.Client, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Occupancy;
};
