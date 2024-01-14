import { Sequelize, Options } from "sequelize";
import config from "./config"; // Import the Options type

// Define the environment type explicitly
const environment =
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === "production"
    ? process.env.NODE_ENV
    : "development"; // Default to "development" if invalid
const sequelize = new Sequelize(config[environment] as Options); // Assert type safety

// Define your Sequelize models here
export default sequelize;
