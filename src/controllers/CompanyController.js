import * as companyModel from '../models/companyModel.js';

class CompanyController {

  getAllCompanys = (req, res) => {
    const { _start, _end, _sort, _order } = req.query;
    
    const start = parseInt(_start, 10) || 0;
    const end = parseInt(_end, 10) || companyModel.getAllCompanys({}).length;
    const sort = _sort || 'id';
    const order = _order || 'ASC';
    
    const companys = companyModel.getAllCompanys({ start, end, sort, order });

    res.set('X-Total-Count', companyModel.getAllCompanys({}).length);
    res.set('Access-Control-Expose-Headers', 'X-Total-Count');

    res.json(companys);
  }

  getCompanylById = (req, res) => {
    const company = companyModel.getCompanyById(req.params.id);
    if (company) {
      res.json(company);
    } else {
      res.status(404).json({ message: 'company não encontrado' });
    }
  };

  createCompany = (req, res) => {
    const { name, acronym, address, address1, address2, eircode, email,  phone } = req.body;

    const newCompany = companyModel.createCompany({
      name,
      acronym,
      address,
      address1,
      address2,
      eircode,
      email,
      phone,
    });

    res.status(201).json(newCompany);
  };

  updateCompany = (req, res) => {
    const { name, acronym, address, address1, address2, eircode, email,  phone } = req.body;

    const updatedCompany = companyModel.updateCompany(req.params.id, {
      name,
      acronym,
      address,
      address1,
      address2,
      eircode,
      email,
      phone,
    });

    if (updatedCompany) {
      res.json(updatedCompany);
    } else {
      res.status(404).json({
        message: 'Company not Found'
      });
    }
  };

  deleteCompany = (req, res) => {
    const isDeleted = companyModel.deleteCompany(req.params.id);
    if (isDeleted) {
      res.json({
        message: 'Company deleted with success'
      });
    } else {
      res.status(404).json({
        message: 'Company not Found'
      });
    }
  };

}
export default new CompanyController();