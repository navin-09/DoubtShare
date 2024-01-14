// src/index.ts
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config(); // Load variables from .env file
import sequelize from "./database/config/sequelize";
import routes from "./routes";
import "module";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(routes);
const port = 3001;

// Sequelize setup
// Use the Sequelize instance from the new module
sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((error: any) => {
    console.error("Unable to connect to the database:", error);
  });
// Express routes

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
