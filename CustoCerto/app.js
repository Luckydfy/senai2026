const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
    secret: 'segredo',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');

const usuarios = require('./routes/usuarios');
const ingredientes = require('./routes/ingredientes');
const receitas = require('./routes/receitas');

app.use('/', usuarios);
app.use('/ingredientes', ingredientes);
app.use('/receitas', receitas);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});