module.exports = function(sequelize, DataTypes) {
  var Occupancy = sequelize.define("Occupancy", {
    date: { type: DataTypes.DATE, allowNull: false },
    occupied: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
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
