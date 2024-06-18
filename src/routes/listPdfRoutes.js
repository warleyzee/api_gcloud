import { Router } from 'express';
import listPdfController from '../controllers/ListPdfController.js';

const router = new Router();

router.get('/', listPdfController.listPdfs);
 
export default router;