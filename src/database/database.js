import { Sequelize } from "sequelize";
export const sequelize = new Sequelize("AyBEcoConsulting", "paul", "paulp", {
  host: "localhost",
  dialect: "mysql",
});
