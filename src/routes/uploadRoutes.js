const express = require('express');
const router = express.Router();
const { upload, uploadFile, listPdfs } = require('../controllers/uploadController');

router.post('/', upload, uploadFile);
router.get('/', listPdfs);

module.exports = router;
