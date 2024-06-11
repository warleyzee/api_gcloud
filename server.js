// eslint-disable-next-line no-undef
const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 5500;

// habilitar CORS
app.use(cors());

// middleware para fazer o parse do JSON
app.use(bodyParser.json());

// servir arquivos estáticos da pasta uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// importar rotas
const uploadRoutes = require('./routes/uploadRoutes');
const userRoutes = require('./routes/userRoutes');

// usar rotas
app.use('/upload', uploadRoutes);
app.use('/pdfs', uploadRoutes);
app.use('/users', userRoutes);

// Rota para testar o servidor
app.get('/', (req, res) => {
  res.send('Servidor de upload de PDF funcionando');
});

// console de saída
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
