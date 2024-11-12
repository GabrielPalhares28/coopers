const express = require('express');
const cors = require('cors');  // Se estiver utilizando CORS
const app = express();

// Importando as rotas de autenticação e contato da pasta 'routes'
const authRoutes = require('./routes/authRoutes.cjs');  // Caminho correto
const contactRoutes = require('./routes/contactRoutes.cjs');  // Caminho correto

// Middleware
app.use(cors());  // Se estiver utilizando CORS
app.use(express.json());  // Certifique-se de que o servidor processa as requisições JSON corretamente

// Definindo a rota para autenticação
app.use('/auth', authRoutes);  // Rota para autenticação

// Definindo a rota para contato
app.use('/contact', contactRoutes);  // Rota para contato

// Rota para a raiz (opcional, para fins de teste)
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Iniciando o servidor
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
