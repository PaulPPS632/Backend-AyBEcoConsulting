import { Model } from 'sequelize';
import { DataTypes } from 'sequelize';
class Users extends Model {
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
            document:{
              type: DataTypes.STRING
            },
            adress:{
              type: DataTypes.STRING
            },
            phone:{
              type: DataTypes.STRING
            },
            email:{
              type: DataTypes.STRING
            },
            password:{
              type: DataTypes.STRING
            }
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
    // Un Usuario tiene muchos Cursos
    this.hasMany(models.Enrollments);
    models.Enrollments.belongsTo(this);
  }
}

export default Users;
