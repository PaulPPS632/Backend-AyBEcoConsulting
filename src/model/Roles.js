import { DataTypes, Model } from 'sequelize';

class Roles extends Model {
  static init(sequelize) {
    super.init(
      {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING
        },
        description:{
            type: DataTypes.STRING
        }
      }, // attributes
      {
        sequelize,
      }
    );

    return this;
  }
  static associate(models){
    this.hasMany(models.Users);
    models.Users.belongsTo(this);
  }




  //static associate(models) {
    // Un Curso pertenece a un Usuario
    //this.belongsTo(models.Usuario, { foreignKey: "usuarioId" });
 // }
}

export default Roles;
