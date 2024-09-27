const { Model, DataTypes } = require("sequelize");

class Enrollments extends Model {
  static init(sequelize) {
    super.init(
      {
        enrollmentDay: {
          type: DataTypes.STRING,
        },
        cancelled: {
          type: DataTypes.BOOLEAN,
        },
        cancelled: {
          type: DataTypes.STRING,
        },
      }, // attributes
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = Enrollments;
