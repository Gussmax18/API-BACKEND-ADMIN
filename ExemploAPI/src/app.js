require('dotenv').config(); // Arquivo => .env
const express = require('express');
const { sequelize } = require('./models');
const routes = require("./routers/router")

const app = express(); //Iniciando servidor

app.use(express.json());

/**
 * criar -> post /api/user/ -- {objeto}
 * Buscar -> GET /api/user/user                  
 * 
 * 
 * 
 * 
 */

app.use('/api', routes)

sequelize.authenticate()

    .then(() => {
        console.log("Conexao com o banco de dados realizada com êxito")
    })

    .catch(err => {

        console.error("Falha ao conectar no database")
    });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    // Listen -> Ouvir
    // Ouvindo na possível ou na porta 3000;
    console.log('-------------------------');
    console.log(`Running on http://${PORT}`);
    console.log('-------------------------');
});