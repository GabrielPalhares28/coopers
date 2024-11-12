// Alterando a sintaxe de import para require
const express = require('express');
const router = express.Router();

// Middleware para processar JSON
router.use(express.json());

// Rota para o Signup
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Verifica se todos os campos foram enviados
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  // Validação simples do formato do e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  // Verificação simples de senha (mínimo 6 caracteres)
  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters' });
  }

  try {
    // Aqui você pode adicionar a lógica para salvar o usuário no banco de dados
    console.log({ username, email, password });

    // Retorna uma resposta de sucesso
    res.status(201).json({ message: 'User successfully registered' });
  } catch (err) {
    // Se ocorrer um erro, retorna 500
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
