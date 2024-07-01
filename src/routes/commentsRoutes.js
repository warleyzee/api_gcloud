import express from 'express';
import submittalController from '../controllers/submittalController.js';

const router = express.Router();

router.post('/submittals/:id/comments', submittalController.addComment);

export default router;
