const { Model, DataTypes } = require("sequelize");

class Raitings extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        raiting: {
          type: DataTypes.DOUBLE,
        },
      }, // attributes
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = Raitings;
