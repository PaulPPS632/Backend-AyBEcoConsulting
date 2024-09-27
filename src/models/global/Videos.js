const { Model, DataTypes } = require("sequelize");

class Videos extends Model {
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
        topics: {
          type: DataTypes.JSON,
        },
        url: {
          type: DataTypes.STRING,
        },
      }, // attributes
      {
        sequelize,
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsToMany(models.Courses, { through: "CuourseVideos" });
    models.Courses.belongsToMany(this, { through: "CuourseVideos" });
  }
}
module.exports = Videos;
