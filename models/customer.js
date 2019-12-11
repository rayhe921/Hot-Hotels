module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("customer", {
      firstName: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 25] }
      },
      lastName: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 25] }
      },
      
      customer_phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: true,
            notEmpty: true
        },
        validate: {
            len: [1, 15] }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        lowercase: true,
        validate: {
          isEmail: true,
          notEmpty: true
        },
    },
      check_in: DataTypes.DATE,
      check_out: DataTypes.DATE,
      price: DataTypes.INTEGER
    })
    return Customer;
  };
  