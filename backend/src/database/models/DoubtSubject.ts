// Import necessary modules from sequelize
import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../config/sequelize";

class DoubtSubjects extends Model {
  public subject_id!: number;
  public subject_name!: string;
}

DoubtSubjects.init(
  {
    subject_id: {
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    subject_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "DoubtSubjects",
    sequelize: sequelize,
  }
);

// Export the User model
export default DoubtSubjects;
