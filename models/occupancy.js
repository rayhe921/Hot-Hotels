module.exports = function (sequelize, DataTypes) {
  var moment = require('moment');
  var Occupancy = sequelize.define("Occupancy", {
<<<<<<< HEAD
    date: {
      type: DataTypes.DATE,
      get: function (fieldName) {
        const rawValue = this.getDataValue('date');
        // parse raw value using whatever logic you want
        // this won't work, but you get the idea
        return moment(rawValue).toISOString();
      },
      allowNull: false
    },
=======
    date: { type: DataTypes.DATEONLY },
>>>>>>> master
    occupied: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Occupancy.associate = function (models) {
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
