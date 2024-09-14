import { DataTypes, Model } from 'sequelize';

class Enrollments extends Model {
  static init(sequelize) {
    super.init(
      {
        enrollmentDay:{
            type: DataTypes.STRING
        },
        cancelled:{
            type: DataTypes.BOOLEAN
        },
        cancelled:{
            type: DataTypes.STRING   
        }
      }, // attributes
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Enrollments;
