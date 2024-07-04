import * as submittalModel from '../models/submittalModel.js';
import multer from 'multer';
import path from 'path';

// Configuração do armazenamento do multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// const upload = multer({ storage: storage });
const upload = multer({ storage: storage });

const formatDate = (date) => {
  const d = new Date(date);
  let day = `${d.getDate()}`;
  let month = `${d.getMonth() + 1}`;
  const year = d.getFullYear();

  if (day.length < 2) day = `0${day}`;
  if (month.length < 2) month = `0${month}`;

  return [day, month, year].join('/');
};

class SubmittalController {

  getAllSubmittals = (req, res) => {
    const { _start, _end, _sort, _order } = req.query;

    const start = parseInt(_start, 10) || 0;
    const end = parseInt(_end, 10) || submittalModel.getAllSubmittals({}).length;
    const sort = _sort || 'id';
    const order = _order || 'ASC';

    const submittals = submittalModel.getAllSubmittals({ start, end, sort, order });

    res.set('X-Total-Count', submittalModel.getAllSubmittals({}).length);
    res.set('Access-Control-Expose-Headers', 'X-Total-Count');

    res.json(submittals);
  };

  getSubmittalById = (req, res) => {
    const submittal = submittalModel.getSubmittalById(req.params.id);
    if (submittal) {
      res.json(submittal);
    } else {
      res.status(404).json({ message: 'Submittal não encontrado' });
    }
  };

  createSubmittal = (req, res) => {
    const { description, location, dateSubmitted, rev, status, issuedTo, accepted } = req.body;
    const file = req.file ? req.file.filename : null;

    const newSubmittal = submittalModel.createSubmittal({
      description,
      location,
      dateSubmitted,
      rev,
      status,
      issuedTo: Array.isArray(issuedTo) ? issuedTo : [issuedTo],
      accepted,
      file,
      comments:[]
    });

    res.status(201).json(newSubmittal);
  };

  updateSubmittal = (req, res) => {
    const { description, location, dateSubmitted, rev, status, issuedTo, accepted } = req.body;
    const file = req.file ? req.file.filename : null;

    const updatedSubmittal = submittalModel.updateSubmittal(req.params.id, {
      description,
      location,
      dateSubmitted,
      rev,
      status,
      issuedTo: Array.isArray(issuedTo) ? issuedTo : [issuedTo],
      accepted,
      file
    });

    if (updatedSubmittal) {
      res.json(updatedSubmittal);
    } else {
      res.status(404).json({
        message: 'Submittal not Found'
      });
    }
  };

  deleteSubmittal = (req, res) => {
    const isDeleted = submittalModel.deleteSubmittal(req.params.id);
    if (isDeleted) {
      res.json({
        message: 'Submittal deleted with success'
      });
    } else {
      res.status(404).json({
        message: 'Submittal not Found'
      });
    }
  };

  addComment = (req, res) => {
    const submittalId = req.params.id;
    const { text, author, date } = req.body;
  
    const submittal = submittalModel.getSubmittalById(submittalId);
    if (!submittal) {
        return res.status(404).json({ message: 'Submittal not found' });
    }
  
    const newComment = { id: Date.now(), text, author, date };
    submittal.comments = submittal.comments || [];
    submittal.comments.push(newComment);
  
    const updatedSubmittal = submittalModel.updateSubmittal(submittalId, submittal);
    res.status(201).json(newComment);
  };
}

export default new SubmittalController();
export { upload };
