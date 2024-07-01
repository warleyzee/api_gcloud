// routes/companyRoutes.js
import { Router } from 'express';
import companyController from '../controllers/CompanyController.js';

const router = Router();

// Rota para usuário
router.get('/', companyController.getAllCompanys);
router.get('/:id', companyController.getCompanylById);
router.post('/', companyController.createCompany);
router.put('/:id', companyController.updateCompany);
router.delete('/:id', companyController.deleteCompany);

export default router;

// ..-. .- -- .. .-.. .. .-