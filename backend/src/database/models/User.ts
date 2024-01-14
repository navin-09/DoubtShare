// Import necessary modules from sequelize
import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../config/sequelize";

class User extends Model {
  public user_id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public role!: string;
  public class_grade?: string;
  public language!: string;
}

User.init(
  {
    user_id: {
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class_grade: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Users",
    sequelize: sequelize,
  }
);

// Export the User model
export default User;
