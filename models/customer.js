module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("customer", {
      customer_name: { 
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
      customer_email: {
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
      beds_needed: DataTypes.INTEGER,
    })
    return Customer;
  };
  