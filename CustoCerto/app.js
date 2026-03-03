const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const rota_usuario = require('./routes/usuarios');
const app = express();
const port = 3000;

app.use(expressLayouts);
app.set('layout', 'layouts/principal');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/usuarios', rota_usuario);
app.get('/', (req, res) => {
    res.redirect('/usuarios/login');
});
app.listen(port, () => {
    console.log(`Servidor executando em: http://localhost:${port}`);
});