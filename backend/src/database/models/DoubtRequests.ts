// Import necessary modules from sequelize
import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../config/sequelize";

class DoubtRequests extends Model {
  public doubt_requests_id!: number;
  public student_id!: number;
  public subject_id!: number;
  public question!: string;
  public status!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

DoubtRequests.init(
  {
    doubt_requests_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subject_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    question: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "DoubtRequests",
    sequelize: sequelize,
  }
);

// Export the DoubtRequests model
export default DoubtRequests;
