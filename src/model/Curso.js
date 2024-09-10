import { Model } from 'sequelize';
import { DataTypes } from 'sequelize';
class Curso extends Model {
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
              allowNull: false, // Puedes configurar esto según tus necesidades
            },
          },
          {
            sequelize,
            tableName: 'cursos', // Opcional: nombre de la tabla en la base de datos
            timestamps: true, // Opcional: crea los campos createdAt y updatedAt automáticamente
          }
    );

    return this;
  }
  // Definir asociaciones
  static associate(models) {
    // Un Curso pertenece a un Usuario
    this.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });
  }
}

export default Curso;
