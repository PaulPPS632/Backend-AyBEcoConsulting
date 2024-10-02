const { Model, DataTypes } = require("sequelize");

class Categorias extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        nombre: {
          type: DataTypes.STRING,
          allowNull: false, // Puedes configurar esto según tus necesidades
        },
        descripcion: {
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
    this.hasMany(models.Courses, { foreignKey: "CategoriaId" });
    models.Courses.belongsTo(this, { foreignKey: "CategoriaId" });
  }
}

module.exports = Categorias;
