import { Sequelize } from "sequelize";
export const sequelize = new Sequelize("railway","root", "ShTKOpYnDvtmlESQCQZetEKCLbylRTRc",{
    host: "autorack.proxy.rlwy.net",
    port: '10824',
    dialect: "mysql"
});