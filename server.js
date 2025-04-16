const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');

// Conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Altere para o seu usuário do MySQL
    password: '',  // Altere para a sua senha do MySQL
    database: 'coffee_shop'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar com o banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

app.use(express.static('public'));

// Rota para a home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Rota para o menu
app.get('/menu', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
