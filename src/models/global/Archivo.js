const { Model, DataTypes } = require("sequelize");

class Archivo extends Model {
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
        },
        namekey: {
          type: DataTypes.STRING,
        },
        url: {
          type: DataTypes.STRING,
        },
        ubicacion: {
          type: DataTypes.STRING,
        },
        descripcion: {
          type: DataTypes.STRING,
        },
        tipo_Archivo: {
          type: DataTypes.STRING,
        },
      }, // attributes
      {
        sequelize,
        timestamps: false,
        tableName: "Archivo",
      }
    );

    return this;
  }
  static associate(models) {
    /** 
    //realacion uno a muchos con producto, la foreign key en la tabla Producto es ArchivoPrincipalId
    this.hasMany(models.Courses, {
      foreignKey: "ArchivoPrincipalId",
      sourceKey: "id",
      as: "ArchivoPrincipal",
    });
    models.Courses.belongsTo(this, {
      foreignKey: "ArchivoPrincipalId",
      targetKey: "id",
      as: "ArchivoPrincipal",
    });
    //Relacion muchos a muchos con producto
    this.hasMany(models.Videos, {
      foreignKey: "ArchivoId", // Llave foránea en la tabla intermedia que referencia a Archivo
      sourceKey: "id",
    });
    models.Videos.belongsTo(this, {
      foreignKey: "ProductoId", // Llave foránea en la tabla intermedia que referencia a Producto
      otherKey: "ArchivoId",
    });
*/

    //---------------------------------------------------------------------------------------
    this.belongsToMany(models.Courses, {
      through: models.Videos,
      foreignKey: "ArchivoId", // Llave foránea en la tabla Videos que referencia a Archivo
      otherKey: "CursoId", // Llave foránea en la tabla Videos que referencia a Curso
      as: "cursosAsociados",
    });

    this.hasMany(models.Courses, {
      foreignKey: "ImagenPortadaId",
      sourceKey: "id",
      as: "ImagenPortada",
    });
    models.Courses.belongsTo(this, {
      foreignKey: "ImagenPortadaId",
      targetKey: "id",
      as: "ImagenPortada",
    });
  }
}

module.exports = Archivo;
