declare var module: any;

import * as path from "path";

module.exports = {
  require: ["sequelize-cli-typescript"],
  config: path.resolve("src", "database", "config", "config.ts"), // Assuming valid paths
  "models-path": path.resolve("src", "database", "models"),
  "migrations-path": path.resolve("src", "database", "migrations"),
  "seeders-path": path.resolve("src", "database", "seeders"),
};
