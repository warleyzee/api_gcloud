// import { Router } from 'express';
// import SubmittalController, { upload } from '../controllers/SubmittalController.js';

// const router = new Router();

// router.get('/', SubmittalController.getAllSubmittals);
// router.get('/:id', SubmittalController.getSubmittalById);
// router.post('/', upload.single('file'), SubmittalController.createSubmittal); // Adicione o middleware upload
// router.put('/:id', upload.single('file'), SubmittalController.updateSubmittal);// router.put('/:id', submittalController.updateSubmittal);
// // router.delete('/:id', submittalController.deleteSubmittal);

// export default router;

import { Router } from 'express';
import submittalController, { upload } from '../controllers/submittalController.js';

const router = Router();

router.get('/', submittalController.getAllSubmittals);
router.get('/:id', submittalController.getSubmittalById);
router.post('/', upload.single('file'), submittalController.createSubmittal);
router.put('/:id', upload.single('file'), submittalController.updateSubmittal);
router.delete('/:id', submittalController.deleteSubmittal);
router.post('/:id/comments', submittalController.addComment);

export default router;
