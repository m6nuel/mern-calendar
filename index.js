const express = require('express');
const { dbConection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

console.log( process.env )

// Crear servidor de express
const app = express();

// base de datos
dbConection();

// CORDS
app.use(cors())


// Lectura y parceo del body
app.use( express.json() );

// Directorio Publico
app.use( express.static('public') );

// Rutas
app.use( '/api/auth', require('./routes/auth') );
// TODO: CRUD: Eventos
app.use( '/api/events', require('./routes/events') );



// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});

