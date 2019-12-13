/*module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.TEXT
  });
  return Client;
};*/
module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define("Client", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25]
      }
    },

    clientPhone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        notEmpty: true
      },
      validate: {
        len: [1, 15]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      lowercase: true,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    check_in: DataTypes.DATE,
    check_out: DataTypes.DATE,
    price: DataTypes.INTEGER
  });

  Client.associate = function(models) {
    // Associating Client with Room
    Client.hasMany(models.Room, {
      onDelete: "cascade"
    });
  };
  return Client;
};
