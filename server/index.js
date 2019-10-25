require('dotenv').config({path:__dirname+'/../.env'});
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const app = express();
const PORT = SERVER_PORT
app.use(express.json())//REMEMBER THIS

massive(CONNECTION_STRING).then(db =>{
    app.set('db', db);
    console.log(`db connected`)
})

app.post('/api/auth/register', ctrl.register)
app.post('/api/auth/login', ctrl.login)

app.listen(PORT, console.log(`Server listening on port ${PORT}`))