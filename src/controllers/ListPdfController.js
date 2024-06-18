import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ListPdfController {

  listPdfs = (req, res) => {
    const directoryPath = path.join(__dirname, '../../uploads');

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
}
export default new ListPdfController();

