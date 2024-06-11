const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../uploads');
    // Cria a pasta de upload se não existir
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const uploadFile = (req, res) => {
  if (req.file) {
    res.json({ message: 'Upload bem-sucedido', file: req.file });
  } else {
    res.status(400).json({ message: 'Nenhum arquivo enviado' });
  }
};

const listPdfs = (req, res) => {
  const directoryPath = path.join(__dirname, '../uploads');

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.log('Erro ao ler pasta de uploads', err);
      return res.status(500).json({ error: 'Erro ao ler a pasta de uploads' });
    }

    // filtrar os arquivos pdf
    const pdfFiles = files.filter((file) => path.extname(file).toLowerCase() === '.pdf');

    const pdfList = pdfFiles.map((file) => ({
      name: file,
      url: `http://localhost:5500/uploads/${file}`,
    }));

    res.json(pdfList);
  });
};

module.exports = {
  upload: upload.single('file'),
  uploadFile,
  listPdfs,
};
