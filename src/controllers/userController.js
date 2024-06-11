// controllers/userController.js
const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  const { nome, sobrenome, email, telefone, empresa } = req.body;

  try {
    const newUser = await User.create({ nome, sobrenome, email, telefone, empresa });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
};
