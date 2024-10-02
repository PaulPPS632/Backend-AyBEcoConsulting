const { Model, DataTypes } = require("sequelize");
class Courses extends Model {
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
          type: DataTypes.TEXT,
          allowNull: false,
        },
        precio: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        duracion: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        nivel: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize, // Opcional: nombre de la tabla en la base de datos
        timestamps: true, // Opcional: crea los campos createdAt y updatedAt automáticamente
      }
    );

    return this;
  }
  // Definir asociaciones
  static associate(models) {
    // Un Curso pertenece a un Usuario
    this.hasMany(models.Enrollments);
    models.Enrollments.belongsTo(this);

    /*
    this.hasMany(models.Videos, {
      foreignKey: "CursoId",
      sourceKey: "id",
    });
    models.Videos.belongsTo(this, {
      foreignKey: "CursoId",
      targetKey: "id",
    });
    */
    this.belongsToMany(models.Archivo, {
      through: models.Videos,
      foreignKey: "CursoId", // Llave foránea en la tabla Videos que referencia a Curso
      otherKey: "ArchivoId", // Llave foránea en la tabla Videos que referencia a Archivo
      as: "archivosAsociados",
    });
  }
}

module.exports = Courses;
