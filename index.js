const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/user.route');

const app = express();
require('./config/dataBaseConfig');
require('dotenv').config({path: './config/.env'});

//parametrage de CORS pour permettre l'accessibilité de mon API partout
const corsOptions = {
    
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

//routes
app.use('/api/user', userRoutes);

app.listen(5000, () => console.log('Server started: 5000'));