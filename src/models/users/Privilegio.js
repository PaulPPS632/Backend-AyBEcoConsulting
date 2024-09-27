const { Model, DataTypes } = require("sequelize");

class Privilegio extends Model {
  static init(sequelize) {
    super.init(
      {
        // attributes
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
      },
      {
        sequelize,
        timestamps: false,
        tableName: "Privilegio",
      }
    );

    return this;
  }
  static associate(models) {
    this.belongsToMany(models.Rol, { through: "RolPrivilegio" });
    models.Rol.belongsToMany(this, { through: "RolPrivilegio" });
  }
}

module.exports = Privilegio;
