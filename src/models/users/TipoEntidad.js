const { Model, DataTypes } = require("sequelize");

class TipoEntidad extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        descripcion: {
          type: DataTypes.STRING,
        },
        cantdigitos: {
          type: DataTypes.INTEGER,
        },
      }, // attributes
      {
        sequelize,
        timestamps: false,
        tableName: "TipoEntidad",
      }
    );

    return this;
  }
  static associate(models) {
    this.hasMany(models.Entidad, {
      foreignKey: "TipoEntidadId",
      sourceKey: "id",
    });
    models.Entidad.belongsTo(this, {
      foreignKey: "TipoEntidadId",
      targetKey: "id",
    });
  }
}

module.exports = TipoEntidad;
