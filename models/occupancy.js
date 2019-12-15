module.exports = function(sequelize, DataTypes) {
  var Occupancy = sequelize.define("Occupancy", {
    date: { type: DataTypes.STRING },
    occupied: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Occupancy.associate = function(models) {
    //Associating occupancy with room via foreign key
    Occupancy.belongsTo(models.Room, {
      foreignKey: {
        defaultValue: null
      }
    });

    Occupancy.belongsTo(models.Client, {
      foreignKey: {
        defaultValue: null
      }
    });
  };
  return Occupancy;
};
