// routes/userRoutes.js
import { Router } from 'express';
import userController from '../controllers/UserController.js';

const router = Router();

// Rota para usuário
router.post('/login', userController.login);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserlById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;

// ..-. .- -- .. .-.. .. .-