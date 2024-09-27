const { Model, DataTypes } = require("sequelize");

class Rol extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        nombre: {
          type: DataTypes.STRING,
        },
        descripcion: {
          type: DataTypes.STRING,
        },
      }, // attributes
      {
        sequelize,
        timestamps: false,
        tableName: "Rol",
      }
    );

    return this;
  }
  static associate(models) {
    this.hasMany(models.Entidad, {
      foreignKey: "RolId",
      sourceKey: "id",
    });
    models.Entidad.belongsTo(this, {
      foreignKey: "RolId",
      targetKey: "id",
    });
  }
}

module.exports = Rol;
