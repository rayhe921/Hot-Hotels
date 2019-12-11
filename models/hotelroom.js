module.exports = function(sequelize, DataTypes) {
  var Room = sequelize.define("room", {
    // Giving the  model a name of type STRING
    room_type:{
      type: DataTypes.STRING,
    },
    vacancy: {
      type: DataTypes.BOOLEAN,
      default: true
    },
    date: DataTypes.DATE,
    room_quantity: DataTypes.INTEGER,
    bed_quantity: DataTypes.INTEGER
  })


  Room.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Room.hasMany(models.Customer, {
      onDelete: "cascade"
    });
  };

  return Room;
};

