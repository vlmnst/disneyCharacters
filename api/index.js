require('./mongo');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes/index');
const server = express();
server.name = 'API';

server.use(morgan('dev'));
server.use(express.json());
server.use(cors());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// ROUTEO LOS PATH Y MODULARIZO
    server.use('/', routes);

// HANDLE ERRORS EN LAS RUTAS
    server.use((err, req, res, next) => {
        const status = err.status || 500;
        const message = err.message || err;
        console.error(err);
        res.status(status).send(message);
    });

server.listen(3001, () => {
        console.log('> ...server-express listening at 3001');
});