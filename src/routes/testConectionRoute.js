// import { Router } from 'express';
// // import testConectionController from '../controllers/TestConectionController'

// const router = new Router();

// // router.get('/', testConectionController.index);
// router.get('/', (req, res) =>{
//   res.send('Hello World');
// });

// export default router;

import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
  res.json({ message: 'Conexão bem-sucedida' });
});

export default router;
