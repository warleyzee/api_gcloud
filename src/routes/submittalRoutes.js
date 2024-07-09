import { Router } from 'express';
import submittalController, { upload } from '../controllers/submittalController.js';
// import auth from '../middlewares/auth.js';

const router = Router();

// router.use(authMiddleware);

router.get('/', submittalController.getAllSubmittals);
router.get('/:id', submittalController.getSubmittalById);
router.post('/', upload.array('file'), submittalController.createSubmittal);
router.put('/:id', upload.array('file'), submittalController.updateSubmittal);
router.delete('/:id', submittalController.deleteSubmittal);
router.post('/:id/comments', submittalController.addComment);

export default router;
