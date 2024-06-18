import * as submittalModel from '../models/submittalModel.js';

class SubmittalController{

  getAllSubmittals = (req, res) =>{
    res.json(submittalModel.getAllSubmittals());
  }

  getSubmittalById = (req, res) =>{
    const submittal = submittalModel.getSubmittalById(req.params.id);
    if(submittal){
      res.json(submittal);
    } else {
      res.status(404).json({
        message:'Submittal not Found'
      });
    }
  }

  createSubmittal = (req, res) =>{
    const newSubmittal = submittalModel.createSubmittal(req.body);
    res.status(201).json(newSubmittal)
  }

  updateSubmittal = (req, res) =>{
    const updateSubmittal = submittalModel.updateSubmittal(req.params.id, req.body);
    if(updateSubmittal){
      res.json(updateSubmittal);
    } else {
      res.status(404).json({
        message: 'Submittal not Found'
      });
    }
  }

  deleteSubmittal = (req, res) => {
    const isDeleted = submittalModel.deleteSubmittal(req.params.id);
    if(isDeleted){
      res.json({
        message: 'Submittal deleted with success'
      });
    } else {
      res.status(404).json({
        message: 'Submittal not Found'
      });

    }
  };
}

export default new SubmittalController();