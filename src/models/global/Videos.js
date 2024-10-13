const { Model, DataTypes } = require("sequelize");
const Archivo = require("./Archivo");
const Courses = require("../inventory/Courses");
class Videos extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        titulo: {
          type: DataTypes.STRING,
        },
        descripcion: {
          type: DataTypes.STRING,
        },
        topics: {
          type: DataTypes.JSON,
        },
        url: {
          type: DataTypes.STRING,
        },
        urlminiatura: {
          type: DataTypes.STRING,
        },
        antecesor: {
          type: DataTypes.UUID,
          allowNull: true, // Puede ser nulo si no hay video anterior
        },
        sucesor: {
          type: DataTypes.UUID,
          allowNull: true, // Puede ser nulo si no hay video sucesor
        },
        order: {
          type: DataTypes.INTEGER,
        },
      }, // attributes
      {
        sequelize,
        timestamps: true,
      }
    );

    return this;
  }
  static associate(models) {
    // Relación con Archivo

    // Relación con Courses
    models.Courses.hasMany(this, { foreignKey: "CursoId" });
    this.belongsTo(models.Courses, {
      foreignKey: "CursoId",
      as: "cursoRelacionado",
    });

    // Auto-relación para manejar antecesor y sucesor
    this.hasOne(models.Videos, {
      foreignKey: "antecesor",
      as: "videoAnterior",
    });

    this.hasOne(models.Videos, {
      foreignKey: "sucesor",
      as: "videoSiguiente",
    });
  }
}
module.exports = Videos;
