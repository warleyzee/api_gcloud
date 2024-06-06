const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5500;

//habilitar CORS
app.use(cors());

// Configurar armazenamento do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    // Cria a pasta de upload se não existir
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// Rota de upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.json({ message: 'Upload bem-sucedido', file: req.file });
  } else {
    res.status(400).json({ message: 'Nenhum arquivo enviado' });
  }
});

// Rota para testar o servidor
app.get('/', (req, res) => {
  res.send('Servidor de upload de PDF funcionando');
});

app.get('/pdfs', (req, res) =>{
  const directoryPath = path.join(__dirname, 'uploads');

  fs.readdir(directoryPath, (err, files) =>{
    if(err){
      console.log('Erro ao ler pasta de uploads', err)
      return res.status(500).json({error: 'Erro ao ler a pasta de uploads'})
    }

    //filtrar os arquivos pdf
    const pdfFiles = files.filter((file) => path.extname(file).toLowerCase() === '.pdf');

    const pdfList = pdfFiles.map((file) => ({
      name: file,
      url: `http://localhost:5500/uploads/${file}`,
    }));

    res.json(pdfList);
  });
});

//console de saida
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
