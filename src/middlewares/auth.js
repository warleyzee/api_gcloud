import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Auth token is missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Adiciona as informações do usuário ao objeto req
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid auth token' });
  }
};

export default authMiddleware;
