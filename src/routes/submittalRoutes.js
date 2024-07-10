import { Router } from 'express';
import submittalController, { upload } from '../controllers/submittalController.js';

const router = Router();

router.get('/', submittalController.getAllSubmittals);
router.get('/:id', submittalController.getSubmittalById);
router.post('/', upload.single('files'), submittalController.createSubmittal);
router.put('/:id', upload.single('files'), submittalController.updateSubmittal);
router.delete('/:id', submittalController.deleteSubmittal);
router.post('/:id/comments', submittalController.addComment);

export default router;
