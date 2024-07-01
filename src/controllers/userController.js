import * as userModel from '../models/userModel.js';

class UserController {

  getAllUsers = (req, res) => {
    const { _start, _end, _sort, _order } = req.query;
    
    const start = parseInt(_start, 10) || 0;
    const end = parseInt(_end, 10) || userModel.getAllUsers({}).length;
    const sort = _sort || 'id';
    const order = _order || 'ASC';
    
    const users = userModel.getAllUsers({ start, end, sort, order });

    res.set('X-Total-Count', userModel.getAllUsers({}).length);
    res.set('Access-Control-Expose-Headers', 'X-Total-Count');

    res.json(users);
  }

  getUserlById = (req, res) => {
    const user = userModel.getUserById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User não encontrado' });
    }
  };

  createUser = (req, res) => {
    const { name, surname, email, role, jobTitle, phone, company } = req.body;

    const newUser = userModel.createUser({
    name,
    surname,
    email,
    role,
    jobTitle,
    phone,
    company
    });

    res.status(201).json(newUser);
  };

  updateUser = (req, res) => {
    const { name, surname, email, role, jobTitle, phone, company } = req.body;

    const updatedUser = userModel.updateUser(req.params.id, {
      name,
      surname,
      email,
      role,
      jobTitle,
      phone,
      company
    });

    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({
        message: 'User not Found'
      });
    }
  };

  deleteUser = (req, res) => {
    const isDeleted = userModel.deleteUser(req.params.id);
    if (isDeleted) {
      res.json({
        message: 'User deleted with success'
      });
    } else {
      res.status(404).json({
        message: 'User not Found'
      });
    }
  };

}
export default new UserController();