import app from './app.js';
import { sequelize } from './database/database.js';
import { models } from './model/models.js';
async function main(){
    try {
        await sequelize.sync({alter: true})
        app.listen(3000,()=>{
            console.log(`Servidor corriendo en el puerto 3000`);
        })
    } catch (error) {
        console.log(error);
    }
}
main()