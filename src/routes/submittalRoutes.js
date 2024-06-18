import { Router } from 'express';
import submittalController from '../controllers/SubmittalController.js';

const router = new Router();

router.get('/', submittalController.getAllSubmittals);
// router.get('/:id', submittalController.getSubmittalById);
// router.post('/', submittalController.createSubmittal);
// router.put('/:id', submittalController.updateSubmittal);
// router.delete('/:id', submittalController.deleteSubmittal);

export default router;
