const { Model, DataTypes } = require("sequelize");

class Certificates extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        description: {
          type: DataTypes.STRING,
        },
        content: {
          type: DataTypes.JSON,
        },
      }, // attributes
      {
        sequelize,
      }
    );

    return this;
  }
}

module.exports = Certificates;
