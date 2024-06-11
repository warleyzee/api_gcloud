import { Router } from 'express'; 
import ListPdfController from '../controllers/ListPdfController';
const router = new Router();

// const { upload, uploadFile, listPdfs } = require('../controllers/ListPdfController');

// router.post('/', upload, uploadFile);
// router.get('/', listPdfs);

//test
router.get('/', ListPdfController.listPdfs)

export default router;
